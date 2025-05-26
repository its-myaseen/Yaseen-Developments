import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router'

const HeroSection = () => {
  const starSVG = useRef() // Reference for the star SVG
  const Heading = useRef() // Reference for the heading
  const MyImage = useRef() // Reference for the My image
  const BackgroundCircle = useRef() // Reference for the background circle of my Image
  const Description = useRef() // Reference for the description of Left Side
  const ReadMoreButton = useRef() // Reference for the Read More Button on the bottom of description on left side
  const ProjectCount = useRef()
  const ProjectCountBottomText = useRef() // Reference for the project count on the right side
  const ButtonsDiv = useRef() // Reference for the buttons div on the bottom
  const StartProjectButton = useRef() // Reference for the Start Project Button
  const GetQuoteButton = useRef() // Reference for the Get Quote Button

  const tl = gsap.timeline() // Create a GSAP timeline for animations
  const leftTl = gsap.timeline() // Create a GSAP timeline for left side animations
  const rightTl = gsap.timeline() // Create a GSAP timeline for right side animations

  useGSAP(() => {
    tl.from(Heading.current, {
      y: -50,
      opacity: 0,
      duration: 2,
      delay: 2,
      ease: 'power3.out'
    })

    tl.from(BackgroundCircle.current, {
      yPercent: 100,
      duration: 1,
      ease: 'power3.out'
    }, '-=1.5')

    tl.from(MyImage.current, {
      yPercent: 300,
      duration: 1,
      ease: 'power3.out'
    }, '-=1.5')

    tl.from(ButtonsDiv.current, {
      yPercent: 200,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=1.5')

    gsap.from(starSVG.current, {
      scale: 0.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 1
    })

    leftTl.from(Description.current, {
      xPercent: -120,
      duration: 1.5,
      delay: 1.5,
      ease: 'power3.out'
    })
    leftTl.fromTo(ReadMoreButton.current,
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1 }, '-=1'
    )


    rightTl.from(ProjectCount.current, {
      xPercent: 100,
      duration: 1.5,
      delay: 1.5,
      ease: 'power3.out'
    })
    rightTl.fromTo(ProjectCountBottomText.current,
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1 }, '-=1'
    )
  })



  return (
    <div className='block relative h-230 md:h-auto md:box-border lg:h-220 w-full overflow-hidden rounded-b-[7vw] bg-amber-50 resize pb-10'>

      {/* Background Circle */}
      <div ref={BackgroundCircle} className='block absolute h-130 w-110 rounded-full bg-gray-300 bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2 md:h-105 md:w-105 lg:h-130 lg:w-110'></div>

      {/* Star SVG */}
      <svg ref={starSVG} className='hidden sm:block absolute sm:h-15 sm:w-15 md:h-20 md:w-20 top-25 left-[2vw] fill-cyan-500'
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="500"
        height="500"
        viewBox="0 0 375 374.999991"
        preserveAspectRatio="xMidYMid meet"
        zoomAndPan="magnify"
        version="1.0"
      >
        <defs><g /></defs>

        <g fillOpacity="1">
          <g transform="translate(176.244135, 193.124987)">
            <g>
              <path d="M 3.78125 0.171875 C 3.207031 0.171875 2.679688 0.0859375 2.203125 -0.078125 C 1.734375 -0.253906 1.335938 -0.488281 1.015625 -0.78125 C 0.691406 -1.070312 0.453125 -1.394531 0.296875 -1.75 L 1 -2.671875 L 1.1875 -2.671875 C 1.414062 -2.179688 1.753906 -1.789062 2.203125 -1.5 C 2.648438 -1.21875 3.175781 -1.078125 3.78125 -1.078125 C 4.269531 -1.078125 4.664062 -1.15625 4.96875 -1.3125 C 5.28125 -1.476562 5.507812 -1.742188 5.65625 -2.109375 C 5.8125 -2.472656 5.890625 -2.96875 5.890625 -3.59375 L 5.890625 -11.421875 L 7.234375 -11.421875 L 7.234375 -3.578125 C 7.234375 -2.285156 6.941406 -1.335938 6.359375 -0.734375 C 5.785156 -0.128906 4.925781 0.171875 3.78125 0.171875 Z" />
            </g>
          </g>
        </g>

        <g fillOpacity="1">
          <g transform="translate(185.093541, 193.124987)">
            <g>
              <path d="M 3.078125 0 L 1.734375 0 L 1.734375 -11.421875 L 3.078125 -11.421875 Z" />
            </g>
          </g>
        </g>

        <g fillOpacity="1">
          <g transform="translate(189.897061, 193.124987)">
            <g>
              <path d="M 3.78125 0.171875 C 3.207031 0.171875 2.679688 0.0859375 2.203125 -0.078125 C 1.734375 -0.253906 1.335938 -0.488281 1.015625 -0.78125 C 0.691406 -1.070312 0.453125 -1.394531 0.296875 -1.75 L 1 -2.671875 L 1.1875 -2.671875 C 1.414062 -2.179688 1.753906 -1.789062 2.203125 -1.5 C 2.648438 -1.21875 3.175781 -1.078125 3.78125 -1.078125 C 4.269531 -1.078125 4.664062 -1.15625 4.96875 -1.3125 C 5.28125 -1.476562 5.507812 -1.742188 5.65625 -2.109375 C 5.8125 -2.472656 5.890625 -2.96875 5.890625 -3.59375 L 5.890625 -11.421875 L 7.234375 -11.421875 L 7.234375 -3.578125 C 7.234375 -2.285156 6.941406 -1.335938 6.359375 -0.734375 C 5.785156 -0.128906 4.925781 0.171875 3.78125 0.171875 Z" />
            </g>
          </g>
        </g>

        <path
          fillOpacity="1"
          fillRule="evenodd"
          d="M 187.484375 0 L 197.769531 135.777344 L 259.234375 14.265625 L 216.78125 143.640625 L 320.054688 54.917969 L 231.328125 158.1875 L 360.703125 115.738281 L 239.195312 177.203125 L 374.96875 187.484375 L 239.195312 197.769531 L 360.703125 259.234375 L 231.328125 216.78125 L 320.054688 320.054688 L 216.78125 231.328125 L 259.234375 360.703125 L 197.769531 239.195312 L 187.484375 374.96875 L 177.203125 239.195312 L 115.738281 360.703125 L 158.1875 231.328125 L 54.917969 320.054688 L 143.640625 216.78125 L 14.269531 259.234375 L 135.777344 197.769531 L 0 187.484375 L 135.777344 177.203125 L 14.269531 115.738281 L 143.640625 158.1875 L 54.917969 54.917969 L 158.1875 143.640625 L 115.738281 14.265625 L 177.203125 135.777344 Z"
        />
      </svg>

      {/* Heading */}
      <h1 ref={Heading} className='block text-4xl sm:text-5xl md:text-6xl text-center mt-28 sm:mt-38 text-black px-5' style={{ fontFamily: '"Audiowide", sans-serif' }}>Empovering Brand <br></br>Through Creative Solution</h1>

      {/* My Image */}
      <img ref={MyImage} src="/src/assets/HeroSection Image.png" alt="Yaseen Picture" className='block absolute h-140 w-120 object-top object-cover bottom-0 left-1/2 -translate-x-1/2 z-2' />



      {/*Left Side Div */}
      <div className='hidden md:block relative ml-10 lg:ml-10 md:ml-5 mt-40 lg:mt-40 md:mt-60'>

        {/*Description */}
        <p ref={Description} className='w-[30vw] text-sm text-black lg:w-[30vw] lg:text-sm md:text-[10px] md:w-[22vw]' style={{ fontFamily: '"Mulish", sans-serif' }}>My name is Muhammad Yaseen, and I am an experienced MERN Stack Developer with a strong passion for building modern, responsive, and high-performance web applications. I specialize in creating seamless user experiences using React for the frontend and powerful backend services with Node.js and Express. With solid expertise in MongoDB and RESTful APIs, I deliver full-stack solutions that are scalable and tailored to client needs. I take pride in writing clean, efficient code and turning ideas into real-world digital products that make an impact.</p>

        {/* Read More Button */}
        <button id='readmorebtn' ref={ReadMoreButton} className='px-5 py-2.5 lg:px-5 lg:py:2.5 md:px-3 md:py-1.5 lg:text-[17px] md:text-[12px] mt-10 bg-transparent border border-black rounded-full text-black cursor-pointer hover:bg-black hover:text-white duration-300 active:scale-90'><Link to="/AboutMe">Read more about me </Link> </button>
      </div>



      {/* Project Count and Bottom Text */}
      <div className='hidden md:block absolute right-15 lg:right-15 md:right-10 top-110 lg:top-110 md:top-140 '>
        <h1 ref={ProjectCount} className='text-right text-3xl font-bold text-black'>100+ Projects</h1>
        <p ref={ProjectCountBottomText} className='w-[30vw] text-sm text-right text-black'>completed till today</p>
      </div>

      {/* Buttons Div */}
      <div ref={ButtonsDiv} className='flex flex-col sm:flex-row justify-between items-center py-5 sm:py-0 px-2 absolute z-2 bottom-0 sm:bottom-10 left-1/2 -translate-x-1/2 w-full h-35 sm:w-100 sm:h-15 lg:w-100 md:w-85 lg:h-16 md:h-13 border-none sm:border sm:border-white shadow-lg sm:shadow-black rounded-none sm:rounded-full backdrop-blur-lg'>
       <button ref={StartProjectButton} className='h-[90%] w-[70%] sm:h-[80%] sm:w-[49%] lg:h-[80%] lg:w-[49%] md:h-[70%] md:w-39  lg:text-[17px] md:text-[12px] bg-blue-400 text-black rounded-lg sm:rounded-full hover:bg-blue-500 active:bg-blue-600 active:scale-90 cursor-pointer'> <Link className='w-full' to='/Services'>Start Your Project</Link> </button> 
        <button ref={GetQuoteButton} className='h-[90%] w-[70%] sm:h-[80%] sm:w-[49%] lg:h-[80%] lg:w-[49%] lg:text-[17px] md:text-[12px] md:h-[70%] md:w-39 border mt-3 sm:mt-0 border-white rounded-lg sm:rounded-full text-white active:scale-90 cursor-pointer'><Link className='w-full' to="/Contact">Get a Free Quote</Link> </button>
      </div>
    </div>
  )
}

export default HeroSection
