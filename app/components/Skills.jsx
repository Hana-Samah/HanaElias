import React from 'react';
import { skillsData } from '@/assets/assets'; // تأكدي من أن المسار صحيح
// import Image from 'next/image'; <-- لم نعد بحاجة لهذا السطر
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div id="skilles" className="w-full px-12 md:px-[12%] py-20 scroll-mt-20">
      {/* العناوين كما هي لم تتغير */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg text-purple-600 font-medium"
      >
        What I Offer
      </motion.h4>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-extrabold mb-12 text-black"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            // أضفت flex flex-col items-center لضمان توسيط العناصر داخل البطاقة
            className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white group flex flex-col items-center"
          >
            {/* حاوية الأيقونة الدائرية */}
            <div className="mb-4 p-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors">
               {/* هنا التغيير الجذري:
                  نستدعي المكون البرمجي مباشرة.
                  size={45}: يضمن أن كل الأيقونات بنفس الحجم تماماً.
                  color={skill.color}: يعطي كل أيقونة لونها الرسمي.
               */}
               <skill.IconComponent size={45} color={skill.color} />
            </div>
            
            <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition">
                {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;