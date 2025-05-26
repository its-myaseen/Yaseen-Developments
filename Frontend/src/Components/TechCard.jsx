import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TechCard = (props) => {
  const techStackDiv = useRef();
      useGSAP(()=>{
          gsap.from(techStackDiv.current, {
              yPercent: 100,
              opacity: 0,
              duration: 1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                  trigger: techStackDiv.current,
                  start: "top 95%",
                  toggleActions: 'play none none reverse'
              }
          })
      })
  return (
    <div ref={techStackDiv} className='h-45 sm:h-40 w-100 relative rounded-lg px-3 py-4 z-10 overflow-hidden' style={{ backgroundColor: "#f0f8ff17" }}>
      <div className='flex h-[70%] w-full '>
        <img src={props.data.image} className='h-11'></img>
        <div className='block relative h-full flex-1 pl-3'>
          <h1 className='block relative font-bold text-lg text-white'>{props.data.tech}</h1>
          <p className='block text-[12px] text-gray-400'>{props.data.about}</p>
        </div>
      </div>
      <button className='block absolute bottom-4 left-3 h-8 w-[93%] text-gray-200 text-sm rounded-md bg-[#f0f8ff17] hover:bg-[#f0f8ff36] active:bg-[#f0f8ff36] cursor-pointer'>What is {props.data.tech}?</button>
    </div>
  )
}

export default TechCard
