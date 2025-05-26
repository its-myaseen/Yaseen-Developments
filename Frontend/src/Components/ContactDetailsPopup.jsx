import React from 'react'

const ContactDetailsPopup = (props) => {
    return (
        <div className='fixed top-0 left-0 backdrop-blur-2xl h-screen w-screen z-20'>
            <div className='block relative top-1/2 left-1/2 z-10 -translate-1/2 h-90 w-90 bg-[#ffffff1e] border-2 border-[#ffffff27] shadow-md rounded-xl p-5 mb-4'>
                <i className="fa-solid fa-circle-xmark absolute top-3 right-4 text-blue-100 hover:text-blue-200 active:text-blue-200 cursor-pointer text-xl" onClick={()=>{props.closePopup()}}></i>
                <h1 className='block relative text-white text-2xl text-center font-bold mt-4'>Let’s <b className='text-bold text-blue-500'>Connect</b></h1>
                <p className='block relative text-white text-[12px] text-center mt-2'>Got something on your mind? Let’s chat! You can find me on social media or drop me a message directly.</p>

                <div className='flex relative items-center mt-10 py-2 px-3 w-full hover:bg-[#ffffff0e] cursor-pointer'>
                    <i className="fa-brands fa-square-instagram text-white text-xl"></i>
                    <p className='text-white text-sm ml-3'>@dev_yaseen</p>
                </div>

                <div className='flex relative items-center mt-0 py-2 px-3 w-full hover:bg-[#ffffff0e] cursor-pointer'>
                    <i className="fa-brands fa-tiktok text-white text-xl"></i>
                    <p className='text-white text-sm ml-3'>@dev_yaseen</p>
                </div>

                <div className='flex relative items-center mt-0 py-2 px-3 w-full hover:bg-[#ffffff0e] cursor-pointer'>
                    <i className="fa-brands fa-linkedin text-white text-xl"></i>
                    <p className='text-white text-sm ml-3'>Muhammad Yaseen</p>
                </div>

                <div className='flex relative items-center mt-0 py-2 px-3 w-full hover:bg-[#ffffff0e] cursor-pointer'>
                    <i className="fa-brands fa-square-whatsapp text-white text-xl"></i>
                    <p className='text-white text-sm ml-3'>+92-3140507520</p>
                </div>

                <div className='flex relative items-center mt-0 py-2 px-3 w-full hover:bg-[#ffffff0e] cursor-pointer'>
                    <i className="fa-solid fa-square-envelope text-white text-xl"></i>
                    <p className='text-white text-sm ml-3'>itsmyaseen2040@gmail.com</p>
                </div>

            </div>

        </div>
    )
}

export default ContactDetailsPopup
