import React, { useRef, useState } from 'react'
import Alert from './Alert'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ContactMeForm = () => {
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')
    const dataDefault = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    }
    const closeAlert = () => {
        setShowAlert(false)
        setMessage('')
    }

    const [data, setData] = useState(dataDefault)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        // Here you can add your form submission logic, like sending data to an API
        // After submission, form will be reset
        setMessage('Form submitted successfully!')
        setType('success')
        setShowAlert(true)
        setData(dataDefault)
    }

    const changeHandler = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })

    }


    const form = useRef()
    const inputFirstName = useRef()
    const inputSecondName = useRef()
    const inputPhone = useRef()
    const inputEmail = useRef()
    const inputMessage = useRef()
    const button = useRef()

    useGSAP(() => {
        gsap.from(form.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: form.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(inputFirstName.current, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: inputFirstName.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(inputSecondName.current, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: inputSecondName.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(inputEmail.current, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: inputEmail.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(inputPhone.current, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: inputPhone.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(inputMessage.current, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: inputMessage.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(button.current, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: button.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })
    })
    return (
        <div className='flex justify-center mt-20 w-screen' ref={form}>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className=' block relative left-1/2 -translate-x-1/2 box-border w-[100%] sm:w-130 bg-[#ffffff0e] border-2 border-[#ffffff0e] shadow-md rounded-xl p-5 mb-4 '>
                    <div className='flex flex-col sm:flex-row justify-center w-full gap-5'>
                        <div className='block box-border  w-[100%] sm:w-1/2' ref={inputFirstName}>
                            <label className='text-gray-300 text-sm font-normal'>First Name</label>
                            <input name='firstName' onChange={(e) => { changeHandler(e) }} value={data.firstName} type="text" className='w-full h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-sm mt-1 focus:outline-none' placeholder='First Name' />
                        </div>
                        <div className='block box-border  w-[100%] sm:w-1/2' ref={inputSecondName}>
                            <label className='text-gray-300 text-sm font-normal'>Last Name</label>
                            <input name='lastName' onChange={(e) => { changeHandler(e) }} value={data.lastName} type="text" className='w-full h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-sm mt-1 focus:outline-none' placeholder='Last Name' />
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center w-full gap-5 mt-10'>
                        <div className='block box-border w-[100%] sm:w-1/2' ref={inputPhone}>
                            <label className='text-gray-300 text-sm font-normal'>Phone</label>
                            <input name='phone' type="phone" onChange={(e) => { changeHandler(e) }} value={data.phone} className='w-full h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-sm mt-1 focus:outline-none' placeholder='Phone' />
                        </div>
                        <div className='block box-border w-[100%] sm:w-1/2' ref={inputEmail}>
                            <label className='text-gray-300 text-sm font-normal'>Email</label>
                            <input name='email' type="email" onChange={(e) => { changeHandler(e) }} value={data.email} className='w-full h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-sm mt-1 focus:outline-none' placeholder='Email' />
                        </div>
                    </div>

                    <div className='flex justify-center w-full gap-5 mt-10'>
                        <div className='block box-border w-full' ref={inputMessage}>
                            <label className='text-gray-300 text-sm font-normal'>Your Message</label>
                            <textarea name='message' onChange={(e) => { changeHandler(e) }} value={data.message} className='w-full h-37 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 py-2 text-white text-sm mt-1 focus:outline-none' placeholder='Your Message' />
                        </div>
                    </div>

                    <button ref={button} className='h-12 w-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full mt-5 text-white hover:from-blue-600 hover:to-blue-900 cursor-pointer'>Submit</button>
                </div>
            </form>
            {
                showAlert && <Alert type={type} message={message} close={closeAlert} />
            }
        </div>
    )
}

export default ContactMeForm
