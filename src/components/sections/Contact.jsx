"use client"

// import React, { useState } from 'react'
// import emailjs from "emailjs-com"
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import RevealFramer from '../RevealFramer';
import SendEmailContact from './SendEmailContact';

const Contact = () => {
    // const [formData , setFormData] = useState({
    //     name: "",
    //     email: "",
    //     message: ""
    // }); 

    async function handleSubmit(e){
        // e.preventDefault();

        // try{
        // const email = await emailjs.sendForm(import.meta.env.VITE_SERVICEID , "templateId" , e.target);
        // if (email){
        //     alert("message Sent");
        // }
        // }catch (err){
        //     alert("something went wrong");
        //     setFormData({
        //         email: "",
        //         name: "",
        //         message : ""
        //     })
        // }

        
    }

  return ( 
    <section id='contactme' className='min-h-screen flex justify-center py-2 items-center'>
      <RevealFramer>
        <h2 className='text-5xl bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center font-bold my-10'>Get In Touch</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-30 max-w-7xl mx-auto w-full'>
            <SendEmailContact />

            <div className='space-y-8 max-w-6xl'> {/* since space-x is for child element of flex container i dont know.. */}
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
      </RevealFramer>
    </section>
  )
}

export default Contact
