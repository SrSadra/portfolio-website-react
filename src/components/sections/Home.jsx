"use client"


import AboutPhoto from '../AboutPhoto';
import RevealFramer from '../RevealFramer';
import Stats from '../Stats';
import HomeExplains from './HomeExplains';

const Home = () => {



  return (

    <section id='home' className='min-h-screen flex justify-center items-center'>
      <RevealFramer>
        <div className='flex flex-col xl:space-y-20 space-x-10 mt-44'>
          <div className='flex flex-col xl:flex-row  gap-28 items-center justify-center'>
            <HomeExplains />
            <div className='order-1 xl:order-none'>
              <AboutPhoto />
            </div>
          </div>
          <Stats />
        </div>

      </RevealFramer>
    </section>
  )
}

export default Home
