import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ServicesCard = (props) => {
  const card = useRef()
  useGSAP(()=>{
    gsap.from(card.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })
  })
  return (

    <div ref={card} className='block relative min-h-68 w-90 border border-[#ffffff15] rounded-lg px-5 py-5 backdrop-blur-2xl pb-13' style={{ backgroundColor: '#ffffff0e' }}>
      <div className='flex justify-center items-center relative h-15 w-15 bg-[#ffffff15] rounded-full text-2xl text-blue-500 overflow-hidden'> <i className={props.data.button}></i> </div>
      <h1 className='block relative text-white font-bold text-xl mt-5'>{props.data.Service}</h1>
      <p className='block relative text-gray-200 text-[13px] mt-1'>{props.data.aboutService}</p>
      {/* <button className='flex items-center px-5 py-2 gap-2 absolute right-0 bottom-0 bg-blue-500 rounded-br-lg rounded-tl-xl text-white text-[12px] hover:bg-blue-600 duration-200 cursor-pointer'>View More <i className="fa-solid fa-arrow-right"></i></button> */}
    </div>

  )
}

export default ServicesCard