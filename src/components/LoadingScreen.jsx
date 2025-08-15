"use client"

import React, { useEffect, useState } from 'react'

const LoadingScreen = ({onComplete}) => {
    const [text , setText] = useState("");
    const fullText = "<Welcome/>";
    

    useEffect(() => {
        let index = 0; // this is necessary to be here
        const interval = setInterval(() => {
            
            console.log(fullText.substring(0 , index));
            
            setText(fullText.substring(0 , index))
            index++;

            if (index > fullText.length){
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 200);
        

        return () => clearInterval(interval); // clear intervaal when the component is deleted
    },[onComplete] )

  return (
    <div className=' z-50 text-gray-100 flex flex-col justify-center items-center h-screen'>
      <div className='mb-4 text-7xl font-mono font-bold text-center'>
        {text}
        <span className='animate-blink ml-1 '>|</span>
      </div>

      <div className='w-[200px] h-[2px] bg-gray-800 rounded overflow-hidden'>
        <div className='bg-blue-300 h-full shadow animate-loading-bar'></div>
      </div>
    </div>
  )
}

export default LoadingScreen
