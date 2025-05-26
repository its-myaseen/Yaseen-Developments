import React from 'react'

const AboutMern = () => {
    return (
        <div className='flex justify-between relative w-screen box-border pb-10 px-10 overflow-hidden'>
            <div className='block relative w-[60%] h-full'>
                <h1 className='block relative text-white text-4xl w-[90%] text-left mt-10 font-bold'>Why <b className='font-bold text-blue-500'>MERN Stack</b> is the Go-To Tech for Today’s Web Applications</h1>
                <p className='block relative w-[90%] text-white text-md text-left mt-5'>MERN Stack is rapidly becoming the preferred choice for web development due to its full JavaScript environment, allowing seamless development from frontend to backend. With React delivering dynamic and responsive user interfaces, and Node.js powering fast, scalable server-side logic, MERN enables efficient and modern app building. MongoDB’s flexible, document-based database perfectly complements the stack, making it ideal for handling diverse data types. Its strong community support and constant updates ensure MERN stays ahead as the go-to tech for today’s web applications.</p>
            </div>
            <div className='flex justify-end w-1/2 h-full overflow-hidden'>
            <img src="/src/assets/Developer Background Image.png" alt="Image" className='w-[80%] h-80 object-cover rounded-4xl mt-5' />
            </div>
        </div>
    )
}

export default AboutMern
