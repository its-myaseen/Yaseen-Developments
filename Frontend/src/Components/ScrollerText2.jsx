import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollerText2 = () => {

  const scroller = useRef()
  useGSAP(() => {
    gsap.to(".scroller", {
      x: "-50%",
      duration: 35,
      repeat: -1,
      ease: "none"
    })

    gsap.from(scroller.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: scroller.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })
  })
  return (
    <div ref={scroller} className='flex relative gap-20 w-full h-15 bg-blue-500 mt-20 overflow-hidden'>
      <div className='flex relative gap-6 md:gap-10  lg:gap-13 items-center scroller box-border'>

        <div className='box-border flex items-center gap-6 md:gap-10  lg:gap-13'>
          <h1 className=' text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Frontend Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Backend Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>MERN Stack</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>
        </div>

        <div className='box-border flex items-center gap-6 md:gap-10  lg:gap-13'>
          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>API Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>API Integration</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Management System Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Store Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Management System Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Custom Solution</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>















          <h1 className=' text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Frontend Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Backend Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>MERN Stack</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>
        </div>

        <div className='box-border flex items-center gap-6 md:gap-10  lg:gap-13'>
          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>API Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>API Integration</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Management System Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Store Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Management System Development</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>

          <h1 className='text-white text-md sm:text-md md:text-lg lg:text-xl text-nowrap' style={{ fontFamily: "Zen Dots" }}>Custom Solution</h1>

          <svg className=' h-4 w-4 sm:h-3 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  fill-white'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              d="M 374.96875 187.484375 C 234.355469 213.371094 213.371094 234.355469 187.484375 374.96875 C 161.597656 234.355469 140.613281 213.371094 0 187.484375 C 140.613281 161.597656 161.597656 140.613281 187.484375 0 C 213.371094 140.613281 234.355469 161.597656 374.96875 187.484375 Z M 374.96875 187.484375"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>




        </div>


      </div>
    </div>
  )
}

export default ScrollerText2
