// Projects.jsx
import React, { useState, useEffect } from 'react'; // 1. استيراد useEffect
import { projectsData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ==========================================
// Hook مخصص: لتحديد هل الشاشة جوال أم لا
// ==========================================
// هذا الهوك يستمع لحجم الشاشة ويعيد true إذا كان العرض أقل من 1024px
function useIsMobile() {
  // نبدأ بافتراض أنها ليست جوال (لتوافق SSR في Next.js)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // التأكد من أن الكود يعمل على المتصفح فقط
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        // 1024px هو نقطة توقف 'lg' في Tailwind
        setIsMobile(window.innerWidth < 1024);
      };

      // التحقق الأولي عند التحميل
      handleResize();

      // إضافة مستمع لتغير حجم النافذة
      window.addEventListener('resize', handleResize);

      // تنظيف المستمع عند إزالة المكون
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isMobile;
}


// ==========================================
// مكون فرعي: بطاقة المشروع الواحدة
// ==========================================
const ProjectCard = ({ project, index }) => {
  // حالة لتتبع ما إذا كان النص التفصيلي معروضاً بالكامل أم لا
  const [showFullDetails, setShowFullDetails] = useState(false);
  
  // استخدام الهوك لمعرفة حجم الشاشة الحالي
  const isMobileScreen = useIsMobile();

  // --------------------------------------------------
  // إعدادات حدود النص المختلفة
  // --------------------------------------------------
  const mobileLimit = 100;   // اختصار شديد للجوال
  const desktopLimit = 250;  // اختصار أطول للشاشات الكبيرة

  // تحديد الحد المناسب بناءً على حجم الشاشة الحالي
  const currentTextLimit = isMobileScreen ? mobileLimit : desktopLimit;
  // --------------------------------------------------


  // التحقق مما إذا كان النص طويلاً بما يكفي ليحتاج إلى تقليص بناءً على الحد الحالي
  const shouldTruncate = project.details && project.details.length > currentTextLimit;

  // تحديد النص الذي سيتم عرضه بناءً على الحالة والحد الحالي
  let detailsTextToDisplay = project.details;

  if (shouldTruncate && !showFullDetails) {
      // إذا كان النص طويلاً ولم يتم ضغط زر "عرض المزيد"، نقوم بقصه
      detailsTextToDisplay = project.details.substring(0, currentTextLimit);
      
      // تحسين القص: محاولة القص عند آخر مسافة لتجنب قطع الكلمات (اختياري)
      const lastSpaceIndex = detailsTextToDisplay.lastIndexOf(" ");
      if (lastSpaceIndex > 0) {
        detailsTextToDisplay = detailsTextToDisplay.substring(0, lastSpaceIndex);
      }
      detailsTextToDisplay += "...";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-start`}
    >
      
      {/* 1. قسم الصورة (لم يتغير) */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:shadow-[0_0_40px_rgba(120,40,200,0.2)] transition-shadow duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-white opacity-50 z-0"></div>
          <Image 
            src={project.bgImage}
            alt={project.title}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 z-10 relative project-thumbnail"
          />
          <a href={project.link} target="_blank" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 cursor-pointer">
              <div className="bg-white text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Project <Image src={assets.right_arrow_bold} alt="" className="w-4"/>
              </div>
          </a>
        </div>
      </div>

      {/* 2. قسم النصوص */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-2">
            {project.tools.map((tool, i) => (
              <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-md text-sm font-medium border border-purple-100">
                  {tool}
              </span>
            ))}
        </div>

        <p className="text-gray-800 leading-relaxed text-lg font-medium">
          {project.description}
        </p>

        {/* --- منطقة التفاصيل وزر المزيد --- */}
        {project.details && (
          <div className="mt-1">
             {/* عرض النص (المقصوص حسب حجم الشاشة أو الكامل) */}
             <p className="text-gray-600 leading-relaxed text-base inline transition-all duration-300">
              {detailsTextToDisplay}
            </p>
            {/* زر المزيد يظهر فقط إذا كان النص الأصلي أطول من الحد الحالي */}
            {shouldTruncate && (
              <button 
                onClick={() => setShowFullDetails(!showFullDetails)}
                className="text-purple-600 font-semibold ml-2 text-sm hover:underline focus:outline-none transition-colors"
              >
                {showFullDetails ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        )}
        {/* ---------------------------------- */}

        <div className="flex items-center gap-4 mt-4">
            <a href={project.link} target="_blank" className="text-black font-semibold border-b-2 border-purple-600 pb-1 hover:text-purple-600 transition-colors flex items-center gap-2">
              View Project <Image src={assets.right_arrow_bold} alt="" className="w-4"/>
            </a>
        </div>
      </div>

    </motion.div>
  );
};


// ==========================================
// المكون الرئيسي (لم يتغير)
// ==========================================
const Projects = () => {
  return (
    <div id="project" className="w-full px-6 md:px-[10%] py-24 scroll-mt-20 overflow-hidden">
      
      {/* عناوين القسم */}
      <div className="text-center mb-16">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg text-purple-600 font-medium tracking-wide uppercase"
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-black mt-2"
        >
          Recent Works
        </motion.h2>
      </div>

      {/* قائمة المشاريع */}
      <div className="flex flex-col gap-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      
      {/* زر المزيد في الأسفل */}
      <div className="text-center mt-24">
         <a href="https://github.com/Hana-Samah" target="_blank" className="inline-block border-2 border-gray-900 px-8 py-3 rounded-full text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition duration-300">
           See More on GitHub
         </a>
      </div>

    </div>
  );
};

export default Projects;