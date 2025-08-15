"use client"


// import {useTypewriter , Cursor} from "react-simple-typewriter"
import RevealFramer from '../RevealFramer';

const Home = () => {
    // const [text] = useTypewriter({
    //     words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    //     loop: true,
    //     typeSpeed: 20,
    //     deleteSpeed: 10,
    //     delaySpeed: 3000,
    //   });


  return (
    <section id='home' className='min-h-screen flex items-center ml-100 relative'>

      <RevealFramer>
      <div className='text-center z-10 px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 gradient-text leading-right bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent'>Hi , I'm Sadra</h1>
        <h2 className="text-4xl font-bold text-white my-2">
            a <span>
              {/* {text} */}
              tmp
            </span>
          {/* <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="antiquewhite"
          /> */}
        </h2>
        <p className='mb-24 mt-15 '>
            Hi' im sadra Backend Dev 
        </p>

        <div className='flex justify-center space-x-5'>
            <a href='#projects' className='bg-blue-400 text-amber-50 px-5 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>Projects</a>
            <a href='#contactme' className='border border-blue-500/50 text-blue-400 py-3 px-4  transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10'>Contact Me</a>
        </div>
      </div>

      </RevealFramer>
    </section>
  )
}

export default Home
