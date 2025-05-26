import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
const ServicesBtn = (props) => {
  const data = {
    num: props.data.Num,
    Services: props.data.Service,
    background: 'black',
    text: '#0085fafd'
  }


  //gsap animation
  const button = useRef();
  useGSAP(()=>{
    gsap.from(button.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: button.current,
        start: "top 80%",
      }
    })
  })
  return (
    <div ref={button} className='flex relative px-3 sm:px-5 items-center cursor-pointer h-15 w-[100%] sm:w-[90%] rounded-lg sm:rounded-full mb-3 bg-transparent border border-white duration-300 shadow-2xl hover:scale-102 overflow-hidden' style={{ backgroundColor: props.state == props.data.Num ? 'black' : 'transparent' }} onClick={() => { props.changeSelect(data.num) }}>
      <h1 className='block relative text-xl sm:text-3xl font-bold' style={{ color: props.state == props.data.Num ? '#0085fafd' : 'white' }}>{data.num}</h1>
      <h1 className='block relative text-sm sm:text-lg ml-2 sm:ml-4 text-white'>{data.Services}</h1>
      <i className="fa-solid fa-arrow-right block absolute right-5 text-white text-md sm:text-lg"></i>
    </div>
  )
}

export default ServicesBtn
