import React from 'react'

const MernHeader = () => {
    return (
        <div className='flex justify-between items-center relative box-border w-screen px-10 py-30'>
            <div className='flex justify-start relative w-1/2 h-full'>
                <img src='/src/assets/MERN Dev image 3.png' alt='MERN Stack Image' className='w-[90%] h-100 object-cover rounded-tl-2xl rounded-br-2xl rounded-tr-[90px] rounded-bl-[90px]'></img>
            </div>

            <div className='block relative h-full flex-1 overflow-hidden'>
                <h1 className='block relative w-[80%] text-3xl font-bold text-white mt-5 '>Scalable MERN Stack Development Solutions. Crafting Fast, Secure & Dynamic Web Applications</h1>
                <p className='block relative w-90% text-md text-gray-200 mt-5 '>As a freelance MERN Stack developer, I build fast, scalable, and fully responsive web applications using MongoDB, Express.js, React, and Node.js. Whether you need a custom website, admin dashboard, or a full-featured business app, I’ve got you covered from frontend to backend. I focus on clean code, modern UI, and smooth performance to help you grow online. No agency overhead — just direct, reliable service. Let’s bring your web idea to life with MERN.</p>
                <button className='block relative px-10 py-3 bg-blue-500 text-white text-sm rounded-lg mt-5 hover:bg-blue-600 active:bg-blue-700'>Get Started</button>
            </div>
        </div>
    )
}

export default MernHeader
