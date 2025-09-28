import {motion} from "motion/react"
import Image from "next/image"

const AboutPhoto = () => {
  return (
    <div className='h-full w-full relative flex justify-center items-center'>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1 , transition: {delay: 2 , duration: 0.4, ease: "easeIn"}}}>
        <div className=" left-1/2 m-auto top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-lighten absolute">
          <Image priority height={300} width={500}  alt="about-img" className="object-contain rounded-full" src={"/about.jpg"} />
        </div>
        <motion.svg className={"w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"} fill="transparent" viewBox="0 0 506 506" xmlns="http://w3.org/2000/svg">
          <motion.circle cx={253} cy={253} stroke={"#4287f5"} strokeWidth={4} r={240} fill="transparent" strokeLinecap={"round"} strokeLinejoin={"round"} initial={{ strokeDasharray: "24 10 0 0" }} animate={{strokeDasharray:["15 120 25 25" , "16 25 92 72" , "4 250 22 22"], rotate: [120, 360] }}
            transition={{duration: 20, repeat: Infinity , repeatType: "reverse"}}
          >

          </motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default AboutPhoto
