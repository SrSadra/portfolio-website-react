import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from "emailjs-com"
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
    const [formData , setFormData] = useState({
        name: "",
        email: "",
        message: ""
    }); 

    async function handleSubmit(e){
        e.preventDefault();

        try{
        const email = await emailjs.sendForm(import.meta.env.VITE_SERVICEID , "templateId" , e.target);
        if (email){
            alert("message Sent");
        }
        }catch (err){
            alert("something went wrong");
            setFormData({
                email: "",
                name: "",
                message : ""
            })
        }

        
    }

  return (
    <section className='min-h-screen flex justify-center py-20 items-center'>
      <RevealOnScroll>
        <h2 className='text-5xl bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center font-bold my-10'>Get In Touch</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-30 '>
            <div className='space-y-8'>
                <h3 className='items-center font-semibold mb-6 text-2xl'>Send Email</h3>
                <form className='py-5' onSubmit={handleSubmit}>
                <div className='relative'>
                    <input type='text' name='name' id='name' required className='m-2 w-full h-15 p-4 rounded-xl  bg-white/10 focus:outline-none focus:border-blue-500' placeholder='name...' value={formData.name} onChange={(e) => setFormData({...formData , name: e.target.value})}/> 
                </div>
                <div className='relative'>
                    <input type='text' name='email' id='email' required className='m-2 w-full h-15 p-4 rounded-xl  bg-white/10 focus:outline-none focus:border-blue-500' placeholder='email...' value={formData.email}/> 
                </div>
                <div className='relative'>
                    <textarea rows={5} name='messgae'  id='message' required className='m-2 w-full h-25 p-4 rounded-xl  bg-white/10 focus:outline-none focus:border-blue-500' placeholder='message...' value={formData.message}/> 
                </div>
                <button type='' className='w-full m-2 h-15  bg-blue-400 text-amber-50 px-5 py-3 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] font-bold text-xl'>Submit</button>
                </form>
            </div>

            <div className='space-y-8'> {/* since space-x is for child element of flex container i dont know.. */}
                <h3 className='text-2xl font-semibold mb-11'>Contact Information</h3>
                <div className='space-y-6 justify-center'> {/* container of infos and images */}
                        <div className='flex items-start space-x-4 space-y-5'>
                            <MdEmail className='w-10 h-12'/>
                            <div className=''>
                                <h4>Email</h4>
                                <a href='' className='text-gray-400/50'>sadraspurs</a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4 space-y-5'>
                            <FaPhoneFlip className='w-10 h-12'/>
                            <div className=''>
                                <h4>Phone Number</h4>
                                <a href='' className='text-gray-400/50'>+9021717879</a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4 space-y-5'>
                            <IoLocationOutline className='w-10 h-12'/>
                            <div className=''>
                                <h4>Location</h4>
                                <a href='' className='text-gray-400/50'>Tehran , Iran</a>
                            </div>
                        </div>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                <a href=''><FaLinkedin className='h-10 w-10'/></a>
                <a href=''><FaLinkedin className='h-10 w-10'/></a>
                <a href=''><FaLinkedin className='h-10 w-10'/></a>
                </div>
            </div>


        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Contact
