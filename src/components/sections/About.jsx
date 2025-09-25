import React from 'react'
import RevealFramer from '../RevealFramer';

const About = () => {
    const frontEndSkills = ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"];
    const backEndSkills = ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-line-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    ]

  return (
      <section id='about' className='flex relative justify-center items-center min-h-screen py-5 max-w-5xl mx-auto'>
        <RevealFramer>
      <div className='mx-auto px-4'>
        <h2 className='text-5xl  font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center'>About</h2>
        <div className='rounded-2xl p-8 border '>
        <p className='mb-6 text-2xl'>a passionate fullstack developer...</p>
        </div>
        <div className='grid grid-cols-4 md:grid-cols-2 gap-6'> {/* showing skills */}
            <div className='rounded-xl p-6 '>
                <h3 className='font-bold text-2xl mb-2'> Front End</h3>
                <div className='flex flex-wrap gap-2'>{frontEndSkills.map((el ,index) => (<img className='h-8 w-8' key={el}  src={el} />))}</div>
            </div>
            <div className='rounded-xl p-6 '>
                <h3 className='font-bold text-2xl mb-2'> Back End</h3>
                <div className='flex flex-wrap gap-2'>{backEndSkills.map((el ,index) => (<img className='h-10 w-10 mx-1' key={el}  src={el} />))}</div>
            </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl hover:translate-y-1 transition-all '>
                <h3 className='text-2xl font-bold mb-2'>Education</h3>
                <ul className='list-disc list-inside bg-gray-900 p-2 rounded-xl border-amber-50 border space-y-2 h-40'>
                    <li className='text-xl'>
                        <strong>Diploma</strong> - Mofid School (2016 - 2021)
                    </li>
                    <li className='text-xl'>
                        <strong>Bachelor</strong> - Shiraz University (2021 - 2025)
                    </li>
                </ul>
            </div>
            <div className='p-6 rounded-xl hover:translate-y-1 transition-all '>
                <h3 className='text-2xl font-bold mb-2'>Work Experience</h3>
                <div className='bg-gray-900 p-2 rounded-xl border-amber-50 border w-105 h-40'>
                    <div>
                        <h4>clean...</h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </RevealFramer>
    </section>
  )
}

export default About
