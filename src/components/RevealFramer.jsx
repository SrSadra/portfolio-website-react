"use client";

import { useAnimation, useInView } from 'motion/react';
import * as motion from "motion/react-client"
import React, { useEffect, useRef } from 'react'

const RevealFramer = ({children}) => {
    const ref = useRef(); // for controlling the div
    const isInView = useInView(ref, { once: true }); // making once to true dont take the div disapper after scrolling down
    const mainControl = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        }
    }, [isInView])

  return (
    <div ref={ref}>
          <motion.div 
              variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: {opacity: 1, y: 0}
              }}
              initial="hidden"
              animate={mainControl}
              transition={{duration: 0.5 , delay: 0.25}}
          >
            {children}
          </motion.div>
          {/*for convering animation  */}
    </div>
  )
}

export default RevealFramer
