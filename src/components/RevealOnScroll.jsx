import React, { useEffect, useRef } from 'react'

const RevealOnScroll = ({children}) => { // this component should be added everywhere and wrap it
    // const ref = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => { // this intersection has array list that have entry as element
    //         if (entry.isIntersecting){ // now we can rerveal what is inside
    //             ref.current.classList.add("visible") // this should match what is in our css file 
    //         }
    //     }, {threshold: 0.5 , rootMargin: "0px 0px -50px 0px"});

    //     if (ref.current){
    //         observer.observe(ref.current);
    //     }

    //     return () => observer.disconnect();
    // } , [])


  return (
    <div ref={ref} className='reveal'>
      {children}
    </div>
  )
}

export default RevealOnScroll
