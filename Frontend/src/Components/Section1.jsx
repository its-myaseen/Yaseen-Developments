import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const Heading = useRef();
  const SubHeading = useRef();
  const imageAlpha = useRef();
  const imageBravo = useRef();

  useGSAP(() => {
    gsap.from(Heading.current,{
      xPercent: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: Heading.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })
    gsap.from(SubHeading.current,{
      xPercent: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: SubHeading.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(imageAlpha.current,{
      xPercent: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageAlpha.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(imageBravo.current,{
      xPercent: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageBravo.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })
})
return (
  <div className='block relative box-border w-[100vw] bg-black px-5 sm:px-10 pb-15 overflow-hidden'>
    <div className='flex flex-col gap-5 lg:flex-row justify-between align-top mt-25'>
      <h1 ref={Heading} className='block relative text-4xl sm:text-5xl text-white font-bold' style={{ fontFamily: "Mulish" }}>Turning Ideas Into <br></br> Masterpiece</h1>
      <p ref={SubHeading} className='block relative text-sm sm:text-md text-left sm:w-[70%] lg:w-[50%] text-white' style={{ fontFamily: "Mulish" }}>Every great idea deserves to be turned into something exceptional. I bring creativity and technical skill together to build sleek, functional, and user-friendly web experiences. From concept to launch, I focus on transforming your vision into a digital masterpiece that stands out.</p>
    </div>

    <div className='flex relative justify-between mt-10 '>
      <div className='hidden sm:block w-[35%]'>
        <img ref={imageAlpha} src='/src/assets/img1.png' alt='developer image' className='block relative w-[100%] mt-20 object-cover rounded-2xl grayscale-100 hover:grayscale-0 hover:scale-105 duration-300'></img>
      </div>

      <div className='w-[96%] sm:w-[60%]'>
        <img ref={imageBravo} src='/src/assets/img2.png' alt='developer image' className='block relative w-[100%] object-cover rounded-2xl grayscale-100 hover:grayscale-0 hover:scale-105 duration-300' ></img>
      </div>

    </div>
  </div>
)
}

export default Section1
