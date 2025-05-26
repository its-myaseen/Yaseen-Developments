import React, { useEffect, useState } from 'react'

const ServiceDisplay2 = (props) => {
  let [boxData, setBoxData] = useState({
    image: props.data.image,
    discription: props.data.discription,
    btn: props.data.btn
  })



  return (
    <div className='flex md:hidden absolute top-1/2 -translate-y-1/2 right-0 h-[90%] w-[100vw] z-3 justify-center items-center backdrop-blur-2xl overflow-hidden'>
      <button className='block absolute top-5 right-5 sm:top-10 sm:right-10 px-2 py-0.5 sm:px-3.5 sm:py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white rounded-full' onClick={() => { props.closePopup() }}><i className="fa-solid fa-xmark"></i></button>



      <div className='flex relative flex-col box-border w-[100%] px-5 sm:px-10 gap:0'>
        <img src={boxData.image} alt='service image' className='block relative w-[100%] h-80 md:h-125 object-cover mt-0 rounded-2xl duration-300'></img>
        <div className='flex flex-col-reverse sm:flex-row gap-5 h-[100%] flex-1 mt-5 xl:mt-51'>
          <div className='block relative pb-25 sm:h-60 w-full rounded-2xl px-5 py-5 overflow-hidden' style={{ backgroundColor: "#f0f8ff23" }}>
            <p className='block text-sm text-gray-300'>I'm a MERN Stack Developer passionate about web apps.
              I build fast, responsive, and scalable solutions.
              Always learning and improving my tech skills.</p>

            <span className='absolute right-5 bottom-5 px-3 py-2 rounded-full box-border cursor-pointer bg-[#f0f8ff23] duration-200 hover:bg-[#f0f8ff41]'> <i className="fa-solid fa-arrow-right -rotate-40 text-white"></i> </span>

            <h1 className='block absolute font-bold text-lg text-white leading-5 bottom-5 left-5'>View My<br />More Services</h1>
          </div>
          <div className='md:block relative pb-25 sm:h-60 md:h-45 w-full rounded-2xl bg-blue-500 p-5'>
            <p className='block text-sm text-white'>{boxData.discription}</p>

            <span className='absolute right-5 bottom-5 px-3 py-2 rounded-full box-border cursor-pointer bg-[#f0f8ff23] duration-200 hover:bg-[#f0f8ff41]'> <i className="fa-solid fa-arrow-right -rotate-40 text-white"></i> </span>

            <h1 className='block absolute font-bold text-lg text-white leading-5 bottom-5 left-5'>About<br />{boxData.btn}</h1>
          </div>
        </div>
        <button className='h-10 w-full mt-5 rounded-xl text-[13px] text-gray-200 bg-[#f0f8ff23] hover:bg-[#f0f8ff2f] active:bg-[#f0f8ff2f]' onClick={() => { props.closePopup() }}>Close</button>
      </div>


    </div>
  )
}

export default ServiceDisplay2
