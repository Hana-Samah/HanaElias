import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
    // يمكنك استخدام Web3Forms للحصول على مفتاح API مجاني
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      // استبدلي المفتاح أدناه بمفتاحك الخاص من web3forms
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-[center_top] bg-[length:90%_auto]">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-2 text-lg text-purple-600 font-medium"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-extrabold mb-12 text-black"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-center text-gray-600 mb-10 text-lg">
           I'm currently looking for new opportunities in Web Development and IT.
           Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input type="text" name="name" placeholder="Enter your name" required className="p-4 outline-none border border-gray-300 rounded-xl bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"/>
                <input type="email" name="email" placeholder="Enter your email" required className="p-4 outline-none border border-gray-300 rounded-xl bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"/>
            </div>
            <textarea name="message" rows="6" placeholder="Enter your message" required className="p-4 outline-none border border-gray-300 rounded-xl bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"></textarea>
            
            <button type="submit" className="py-4 px-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold text-lg hover:shadow-lg transform hover:scale-105 transition duration-300 mx-auto block">
                Submit now
            </button>
            <p className='text-center mt-4 text-gray-500'>{result}</p>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;