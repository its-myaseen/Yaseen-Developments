import React, { useRef } from 'react'
import ServicesCard from './ServicesCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ServiceMain = () => {
    const services = [
        {
            Service: "Mern Stack Development",
            aboutService: "I offer full-stack web development using MongoDB, Express.js, React.js, and Node.js. From dynamic user interfaces to secure backend APIs, I build fast, scalable web applications. Perfect for startups, businesses, and custom digital solutions.",
            button: "fa-solid fa-arrow-right"
        },
        {
            Service: "Frontend Development",
            aboutService: "I design and build modern, responsive UIs with React.js and Tailwind CSS—from sleek landing pages to dynamic dashboards—delivering fast, clean, and visually engaging user experiences.",
            button: "fa-brands fa-html5"
        },
        {
            Service: "Backend Development",
            aboutService: "I build secure and scalable backends using Node.js, Express.js, and MongoDB. From APIs to authentication and database integration, I ensure your application runs smoothly and efficiently.",
            button: "fa-solid fa-server"
        },
        {
            Service: "API Development & Integration",
            aboutService: "I specialize in building secure, efficient RESTful APIs with Node.js and Express.js, integrating third-party services like payment gateways and social logins. My APIs are clean, well-documented, and ensure seamless frontend-backend communication.",
            button: "fa-solid fa-sitemap"
        },
        {
            Service: "Store Development",
            aboutService: "I develop clean, responsive eCommerce stores using MERN stack, Shopify, or WooCommerce. From product pages to secure checkout, I deliver smooth and scalable online shopping experiences tailored to your business.",
            button: "fa-solid fa-bag-shopping"
        },
        {
            Service: "Management System Development",
            aboutService: "I build custom management systems—inventory, employee, sales, or tasks—using the MERN stack for secure, scalable, and user-friendly business solutions.",
            button: "fa-solid fa-users-gear"
        },
        {
            Service: "Custom Solutions",
            aboutService: "I create tailor-made software solutions designed to meet your unique business challenges. From web apps to automation tools, I build scalable and efficient systems that fit your exact requirements and help you achieve your goals.",
            button: "fa-solid fa-lightbulb"
        }
    ]

    const heading = useRef()
    const subHeading = useRef()
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.fromTo(heading.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay:1,
            ease: "power2.out",
        })
        tl.fromTo(subHeading.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }, "-=0.5")

    
    })
    return (
        <div className='block relative w-full box-border pb-0 px-5 sm:px-10 '>
            <h1 ref={heading} className='block relative text-white text-2xl sm:text-3xl md:text-4xl w-[90%] md:w-[70%] lg:w-[40%] text-left sm:text-center sm:left-1/2 sm:-translate-x-1/2 mt-20 font-bold'>Lets <b className='font-bold text-blue-500'>Transform</b> Your Ideas Into a Visually Stunning Reality</h1>
            <p ref={subHeading} className='block relative w-[90%] sm:w-[70%] sm:left-1/2 sm:-translate-x-1/2 text-white text-sm sm:text-md text-left sm:text-center mt-5'>Your ideas deserve more than just code — they deserve a stunning, functional digital experience. From concept to launch, I build modern, responsive web solutions that stand out and deliver results.</p>
            <div className='flex flex-wrap gap-x-5 gap-y-5 w-full py-10 justify-center'>
                {
                    services.map((data, ind) => {
                        return <ServicesCard data={data} key={ind}></ServicesCard>
                    })
                }
            </div>


        </div>
    )
}

export default ServiceMain
