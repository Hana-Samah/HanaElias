import React from 'react';
import { projectsData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // هنا اللعبة: إذا كان الرقم زوجي اعكس الاتجاه، وإذا فردي خليه عادي
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
          >
            
            {/* 1. قسم الصورة - نجعله يبدو كشاشة لابتوب */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:shadow-[0_0_40px_rgba(120,40,200,0.2)] transition-shadow duration-500">
                {/* خلفية جمالية تحت الصورة */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-white opacity-50 z-0"></div>
                
                <Image 
                  src={project.bgImage}
                  alt={project.title}
                  width={1920} // قيمة عرض صورتك الفعلية (هذه لا تغير حجم العرض، بل تخبر next/image بالأبعاد الأصلية)
                  height={1080} // قيمة ارتفاع صورتك الفعلية
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 z-10 relative project-thumbnail" // أضفت كلاس جديد
                />
                
                {/* طبقة تظهر عند الهوفر */}
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
              
              {/* الأدوات المستخدمة */}
              <div className="flex flex-wrap gap-2">
                 {project.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-md text-sm font-medium border border-purple-100">
                        {tool}
                    </span>
                 ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="flex items-center gap-4 mt-2">
                 <a href={project.link} target="_blank" className="text-black font-semibold border-b-2 border-purple-600 pb-1 hover:text-purple-600 transition-colors">
                   Source Code
                 </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
      
      {/* زر المزيد في الأسفل */}
      <div className="text-center mt-20">
         <a href="https://github.com/Hana-Samah" target="_blank" className="inline-block border border-gray-300 px-8 py-3 rounded-full text-gray-600 hover:bg-black hover:text-white transition duration-300">
            See More on GitHub
         </a>
      </div>

    </div>
  );
};

export default Projects;