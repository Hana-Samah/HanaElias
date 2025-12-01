'use client';
import React, { useEffect } from 'react';
import { infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="about"
      className="relative w-full px-6 sm:px-12 md:px-[10%] py-20 scroll-mt-20 bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[30rem] h-0 rotate-[-30deg] z-[-1] shadow-[0_0_700px_15px_white]" />

      <motion.h4
        className="text-center mb-2 text-lg text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-10 text-black"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* 3D Model */}
        <motion.div
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[480px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <spline-viewer
            url="https://prod.spline.design/a8lD9DJnIkMh04hy/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '1rem',
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 text-gray-700 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            Hi! I’m Hana, a developer who loves bringing ideas to life through code. 
            Whether it's designing a sleek UI, optimizing a database, or building a game, 
            I enjoy every step of the creation process. With a toolkit that includes Python, 
            and modern JavaScript frameworks, 
            I aim to build technology that makes a difference. 
            I’m currently looking for opportunities to grow, collaborate, and contribute to impactful projects.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto lg:mx-0">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={icon} alt={title} className="w-8 mb-3" />
                <h3 className="font-semibold text-black mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </ul>

          <motion.h4
            className="mt-12 mb-4 text-xl font-semibold text-black text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg hover:shadow-md transition duration-300 bg-white"
              >
                <Image src={tool} alt={`Tool ${index}`} className="w-6 sm:w-8" />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
