import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const ScrollerText1 = () => {
  const scroller = useRef(null)

  useGSAP(() => {
    gsap.to(".scroller", {
      x: "-100%",
      duration: 10,
      repeat: -1,
      ease: "none"
    })
  })
  return (
    <div className='block relative w-[100%] h-30 sm:h-30 md:h-40 lg:h-60 overflow-hidden'>
      <div className='flex relative gap-10 items-center scroller'>

        <div className='box-border flex items-center gap-10'>
          <h1 className=' text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl' style={{ fontFamily: "Zen Dots" }}>Innovate</h1>

          <svg className=' h-5 w-5 sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-10 lg:w-10  fill-blue-500'
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

          <h1 className=' text-white  text-xl sm:text-3xl md:text-5xl lg:text-7xl' style={{ fontFamily: "Zen Dots" }}>Inspire</h1>

          <svg className=' h-5 w-5 sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-10 lg:w-10 fill-blue-500'
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

          <h1 className=' text-white  text-xl sm:text-3xl md:text-5xl lg:text-7xl' style={{ fontFamily: "Zen Dots" }}>Create</h1>

          <svg className=' h-5 w-5 sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-10 lg:w-10 fill-blue-500'
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

        <div className='box-border flex items-center gap-10'>
          <h1 className=' text-white  text-xl sm:text-3xl md:text-5xl lg:text-7xl' style={{ fontFamily: "Zen Dots" }}>Innovate</h1>

          <svg className=' h-5 w-5 sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-10 lg:w-10  fill-blue-500'
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

          <h1 className=' text-white  text-xl sm:text-3xl md:text-5xl lg:text-7xl' style={{ fontFamily: "Zen Dots" }}>Inspire</h1>

          <svg className=' h-5 w-5 sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-10 lg:w-10 fill-blue-500'
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

          <h1 className=' text-white  text-xl sm:text-3xl md:text-5xl lg:text-7xl' style={{ fontFamily: "Zen Dots" }}>Create</h1>

          <svg className=' h-5 w-5 sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-10 lg:w-10 fill-blue-500'
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

      <div className='flex relative justify-evenly items-center bottom-3 mt-10 sm:mt-10 md:mt-18 lg:mt-25'>
        <span className='block h-0.5 w-[43%] bg-gray-400 rounded-full'></span>
        <svg className=' h-4 w-4 sm:h-6 sm:w-6  fill-gray-400'
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
        <span className='block h-0.5 w-[43%] bg-gray-400 rounded-full'></span>
      </div>
    </div>
  )
}

export default ScrollerText1
