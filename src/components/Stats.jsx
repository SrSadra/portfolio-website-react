import React from 'react'
import CountUp from 'react-countup'

const Stats = () => {

    const stats = [
        {
            nums: 100,
            title: 'projects'
        },
        {
            nums: 100,
            title: 'projects'
        },
    ]

  return (
    <section>
          <div className='container mx-auto'>
              <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                  {stats.map((stat , ind) => {
                      return (<div key={ind} className='flex-1 flex gap-3 justify-center items-center xl:justify-start'>
                          <CountUp end={stat.nums} duration={10} className='text-4xl xl:text-6xl font-extrabold' />
                          <p className={`${stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} `}>{stat.title}</p>
                      </div>)
                  })}
              </div>
        </div>
    </section>
  )
}

export default Stats
