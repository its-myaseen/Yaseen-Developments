import React, { useRef, useState } from 'react'
import ServicesBtn from './ServicesBtn'
import ServiceDisplay2 from './ServiceDisplay2'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Link, Links } from 'react-router'

gsap.registerPlugin(ScrollTrigger)
const Section2 = () => {
  const selectText = "#0085fafd"
  const selectBg = "black"
  const normalText = 'white'
  const normalBg = 'transparent'
  let data = [
    {
      Num: '01',
      Service: "Mern Stack Development",
      url: "https://www.mongodb.com/resources/languages/mern-stack"
    },
    {
      Num: '02',
      Service: "Front End Development",
      url: "https://en.wikipedia.org/wiki/Front-end_web_development"
    },
    {
      Num: '03',
      Service: "BackEnd Development",
      url: "https://en.wikipedia.org/wiki/Back_end"
    },
    {
      Num: '04',
      Service: "API Development",
      url: "https://en.wikipedia.org/wiki/Web_API"
    },
    {
      Num: '05',
      Service: "API Integration",
      url: "https://en.wikipedia.org/wiki/Web_API"
    },
    {
      Num: '06',
      Service: "Store Development"
    },
    {
      Num: '07',
      Service: "System Development",
    },
    {
      Num: '08',
      Service: "Custom Solutions",
    }
  ]

  let [boxData, setBoxData] = useState({
    image: '/src/assets/MERN Dev Image1.png',
    discription: 'The MERN stack uses MongoDB, Express.js, React.js, and Node.js to build web apps. It enables full-stack development using JavaScript on both frontend and backend.',
    btn: 'Mern Stack'
  })

  const changeData = (num) => {

  }

  let [state, setState] = useState('01')
  let [popup, setPopup] = useState(false)


  const changeSelect = (num) => {
    setState(num)
    switch (num) {
      case '01':
        setBoxData({
          image: '/src/assets/MERN Dev Image1.png',
          discription: 'The MERN stack uses MongoDB, Express.js, React.js, and Node.js to build web apps. It enables full-stack development using JavaScript on both frontend and backend.',
          btn: 'Mern Stack'
        })
        break

      case '02':
        setBoxData({
          image: '/src/assets/Frontend Dev image1.png',
          discription: 'Frontend development involves creating the user interface of websites using HTML, CSS, and JavaScript. It focuses on building responsive and interactive user experiences.',
          btn: 'Frontend Dev'
        })
        break

      case '03':
        setBoxData({
          image: '/src/assets/Backend Dev Image 1.png',
          discription: 'Backend development focuses on server-side logic, databases, and APIs to power web applications behind the scenes.',
          btn: 'Backend Dev'
        })
        break

      case '04':
        setBoxData({
          image: '/src/assets/API Dev Image 1.png',
          discription: 'API development is the process of building interfaces that enable applications to communicate, share data, and interact seamlessly with servers or third-party services.',
          btn: 'API Development'
        })
        break

      case '05':
        setBoxData({
          image: '/src/assets/API Integration image 1.png',
          discription: 'API integration is the process of connecting different applications or services using APIs to enable smooth data exchange and automated workflows.',
          btn: 'API Integration'
        })
        break

      case '06':
        setBoxData({
          image: '/src/assets/Store Dev Image 1.png',
          discription: 'Store development involves creating online shops with product listings, shopping carts, secure payments, and order management for smooth customer experiences.',
          btn: 'Store Dev'
        })
        break

      case '07':
        setBoxData({
          image: '/src/assets/System De Image 1.png',
          discription: 'System development is the process of designing, building, and implementing software or IT systems that support business operations and workflows.',
          btn: 'System Dev'
        })
        break

      case '08':
        setBoxData({
          image: '/src/assets/Custom Solution.png',
          discription: 'A custom solution is specially developed software tailored to address the unique needs and challenges of a business, providing personalized features and improved efficiency.',
          btn: 'Custom Solutions'
        })
        break
    }

    setPopup(true)
  }

  const closePopup = () => {
    setPopup(false)
  }






  // GSAP Animations
  const Heading = useRef()
  const SubHeading = useRef()
  const image = useRef()
  const divAlpha = useRef()
  const divBravo = useRef()

  useGSAP(()=>{
    gsap.from(Heading.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: Heading.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })
    gsap.from(SubHeading.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: SubHeading.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })
    gsap.from(image.current, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: image.current,
        start: "top 95%",
        toggleActions: 'play none none reverse'
      }
    })
    gsap.from(divAlpha.current, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: divAlpha.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })
    gsap.from(divBravo.current, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: divBravo.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <div className='block relative pt-20 pb-30 z-1 overflow-hidden'>
      <div className='flex justify-between box-border pb-10 w-full border rounded-[50px] overflow-hidden' style={{ background: "#f0f8ff17", borderBlockColor: "#f0f8ff9c" }}>
        <div className='block relative w:[100%] md:w-[50%] h-full pt-15 px-5 sm:px-10'>
          <h1 ref={Heading} className='block relative text-4xl sm:text-5xl text-white' style={{ fontFamily: 'mulish' }}>My <b className='font-normal bg-blue-500 px-2 py-0 rounded-lg'>Sevices</b></h1>
          <p ref={SubHeading} className='block relative mt-5 text-sm text-gray-400'>I offer a wide range of professional solutions tailored to meet your business needs.
            From design to development, everything is crafted with precision and purpose.</p>

          <div className='block relative box-border mt-10'>
            {
              data.map((data, ind) => {
                return <ServicesBtn key={ind} data={data} state={state} changeSelect={changeSelect} changeData={changeData} />
              })
            }
          </div>

        </div>
        <div className=' hidden md:flex flex-col xl:flex-row relative sm:w-[50%] pr-15 gap:0 xl:gap-5 overflow-hidden'>
          <img ref={image} src={boxData.image} alt='service image' className='block relative w-[100%] h-80 md:h-125 xl:w-90 object-cover mt-60 md:mt-51 rounded-2xl duration-300'></img>
          <div className='flex flex-row xl:flex-col gap-5 h-[100%] flex-1 mt-5 xl:mt-51'>
            <div ref={divAlpha} className='hidden lg:block relative h-60 w-full rounded-2xl px-5 py-5 overflow-hidden' style={{ backgroundColor: "#f0f8ff23" }}>
              <p className='block text-sm text-gray-300'>I'm a MERN Stack Developer passionate about web apps.
                I build fast, responsive, and scalable solutions.
                Always learning and improving my tech skills.</p>

             <Link to='/Services'> <span className='absolute right-5 bottom-5 px-3 py-2 rounded-full box-border cursor-pointer bg-[#f0f8ff23] duration-200 hover:bg-[#f0f8ff41] active:bg-[#f0f8ff41]'> <i className="fa-solid fa-arrow-right -rotate-40 text-white"></i> </span> </Link>

              <h1 className='block absolute font-bold text-lg text-white leading-5 bottom-5 left-5'>View My<br />More Services</h1>
            </div>
            <div ref={divBravo} className='md:block relative h-60 md:h-45 lg:h-60 w-full rounded-2xl bg-blue-500 p-5'>
              <p className='block text-sm text-white'>{boxData.discription}</p>

          <span className='absolute right-5 bottom-5 px-3 py-2 rounded-full box-border cursor-pointer bg-[#f0f8ff23] duration-200 hover:bg-[#f0f8ff41] active:bg-[#f0f8ff41]'> <i className="fa-solid fa-arrow-right -rotate-40 text-white"></i> </span>

              <h1 className='block absolute font-bold text-lg text-white leading-5 bottom-5 left-5'>About<br />{boxData.btn}</h1>
            </div>
          </div>
        </div>
        {popup && <ServiceDisplay2 data={boxData} closePopup={closePopup} />}
      </div>

      <div className='block absolute bottom-30 -left-5 h-10 w-100 rotate-8 rounded-full bg-blue-900 blur-3xl z-0'></div>

    </div>
  )
}

export default Section2
