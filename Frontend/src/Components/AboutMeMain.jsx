import React, { useRef } from 'react'
import TechCard from './TechCard'
import Testimonials from './Testimonials'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutMeMain = () => {
    const techStack = [
        {
            image: '/src/assets/html logo.png',
            tech: 'Html',
            about: "HTML (HyperText Markup Language) is the foundational language used to structure and display content on the web."
        },
        {
            image: '/src/assets/CSS logo.png',
            tech: 'Css',
            about: "CSS (Cascading Style Sheets) is used to style and visually design HTML elements on a webpage, controlling layout, colors, fonts, and more."
        },
        {
            image: '/src/assets/JS logo.png',
            tech: 'JavaScript',
            about: "JavaScript is a versatile scripting language used to create dynamic and interactive elements on websites."
        },
        {
            image: '/src/assets/Mongo Logo.png',
            tech: 'Mongo DB',
            about: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for modern, scalable applications."
        },
        {
            image: '/src/assets/Express  Logo.png',
            tech: 'Express JS',
            about: "Express.js is a fast, minimalist Node.js web framework used to build robust APIs and web applications with ease."
        },
        {
            image: '/src/assets/React Logo.png',
            tech: 'React JS',
            about: 'React.js is a powerful JavaScript library for building fast, dynamic user interfaces using reusable components.'
        },
        {
            image: '/src/assets/node logo.png',
            tech: 'Node JS',
            about: "Node.js is a runtime environment that allows you to run JavaScript on the server, enabling fast and scalable backend development."
        },
        {
            image: '/src/assets/Tailwind logo.png',
            tech: 'Tailwind Css',
            about: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development by providing low-level classes directly in your HTML or JSX."
        },
        {
            image: '/src/assets/Python logo.png',
            tech: 'Python',
            about: "Python is a powerful, easy-to-read language used for web development, automation, and data science."
        },
        {
            image: '/src/assets/Github Logo.png',
            tech: 'GitHub',
            about: "GitHub is a platform for hosting and collaborating on Git repositories, making code sharing and version control easier."
        },
        {
            image: '/src/assets/Docker Logo.png',
            tech: 'Docker',
            about: "Docker is a tool that packages applications into lightweight, portable containers for consistent deployment across environments."
        }
    ]

    const heading = useRef()
    const subHeading = useRef()

    const alphaHeading1 = useRef()
    const alphaHeading2 = useRef()
    const alphatext = useRef()
    const alphaimage = useRef()

    const bravoHeading1 = useRef()
    const bravoHeading2 = useRef()
    const bravotext = useRef()
    const bravoimage = useRef()

    const charlieHeading1 = useRef()
    const charlieHeading2 = useRef()
    const charlietext = useRef()
    const charlieimage = useRef()

    const techHeading = useRef()
    const techSubHeading = useRef()
    useGSAP(()=>{
        gsap.from(heading.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: heading.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
         gsap.from(subHeading.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: subHeading.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(alphaHeading1.current, {
            xPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: alphaHeading1.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(alphaHeading2.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: alphaHeading2.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(alphatext.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: alphatext.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(alphaimage.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: alphaimage.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })



         gsap.from(bravoHeading1.current, {
            xPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bravoHeading1.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(bravoHeading2.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bravoHeading2.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(bravotext.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bravotext.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(bravoimage.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bravoimage.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })




         gsap.from(charlieHeading1.current, {
            xPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: charlieHeading1.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(charlieHeading2.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: charlieHeading2.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(charlietext.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: charlietext.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(charlieimage.current, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: charlieimage.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })


        gsap.from(techHeading.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: techHeading.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
        gsap.from(techSubHeading.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: techSubHeading.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
    })
    return (
        <>
        <div className='block box-border min-h-[100vh] w-screen overflow-hidden px-5 sm:px-15'>

            <h1 ref={heading} className='block relative text-white text-4xl w-[80%] md:w-[50%] text-left sm:text-center sm:left-1/2 sm:-translate-x-1/2 mt-15 font-bold'>What I’m <b className='font-bold text-blue-500'>Skilled</b> At</h1>
            <p ref={subHeading} className='block relative w-[90%] md:w-[70%] sm:left-1/2 sm:-translate-x-1/2 text-white text-md text-left sm:text-center mt-5'>A combination of these skills allows me to create scalable, responsive, and user-friendly applications.</p>

            <div className='block relative w-full min-h-[100vh] pb-10 box-border'>
                <div className='flex md:flex-row flex-col relative w-full py-10 box-border mt-5'>
                    <div ref={alphaHeading1} className=' hidden md:block relative w-[30%] h-full'>
                        <h1 className='block relative text-blue-500 text-5xl' style={{ fontFamily: "Smooch Sans" }}>FRONTEND</h1>
                        <h1 className='block relative text-white text-3xl -mt-1 pt-0' style={{ fontFamily: "Smooch Sans" }}>DEVELOPMENT</h1>
                    </div>
                    <div className='block relative flex-1 mt-5 md:mt-0'>
                        <h1 ref={alphaHeading2} className='block relative text-white text-3xl '>Building Engaging, Responsive User Interfaces That Deliver Seamless Digital Experiences</h1>
                        <p ref={alphatext} className='block relative text-gray-300 text-md mt-5'>I specialize in building engaging, responsive user interfaces that provide seamless digital experiences across all devices. By combining clean, efficient code with modern design principles, I ensure websites are not only visually appealing but also intuitive and user-friendly. My focus is on crafting interfaces that delight users while maintaining optimal performance and accessibility. Whether it’s a simple landing page or a complex web application, I bring your vision to life with precision and creativity. I stay updated with the latest frontend technologies and frameworks to deliver solutions that are scalable and future-proof. Every project I work on reflects my commitment to quality, usability, and innovation.</p>
                        <img ref={alphaimage} src='/src/assets/Frontend Dev image 2.png' alt='image' className='w-full h-80 sm:h-130 object-cover rounded-2xl mt-15'></img>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col relative w-full py-10 box-border mt-10'>
                    <div ref={bravoHeading1} className='hidden md:block relative w-[30%] h-full'>
                        <h1 className='block relative text-blue-500 text-5xl' style={{ fontFamily: "Smooch Sans" }}>BACKEND</h1>
                        <h1 className='block relative text-white text-3xl -mt-1 pt-0' style={{ fontFamily: "Smooch Sans" }}>DEVELOPMENT</h1>
                    </div>
                    <div className='block relative flex-1'>
                        <h1 ref={bravoHeading2} className='block relative text-white text-3xl '>Robust Backend Development That Scales With Your Needs And Runs Smoothly Behind the Scenes</h1>
                        <p ref={bravotext} className='block relative text-gray-300 text-md mt-5'>I specialize in building robust backend systems that ensure your application runs smoothly, securely, and at scale. From RESTful APIs to real-time data handling, I design the logic that drives the frontend experience. My approach focuses on clean code, performance optimization, and security best practices. Whether it's user authentication, database management, or complex server-side logic, I handle it with precision. I work mainly with Node.js, Express, and MongoDB, ensuring a fast and flexible backend. Every backend I build is tailored to the unique needs of the business it serves. I don’t just write code—I architect solutions that perform.</p>
                        <img ref={bravoimage} src='/src/assets/Backend Dev Image 2.png' alt='image' className='w-full h-80 sm:h-130 object-cover rounded-2xl mt-15'></img>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col relative w-full py-10 box-border mt-10'>
                    <div ref={charlieHeading1} className='hidden md:block relative w-[30%] h-full'>
                        <h1 className='block relative text-blue-500 text-5xl' style={{ fontFamily: "Smooch Sans" }}>MERN</h1>
                        <h1 className='block relative text-white text-3xl -mt-1 pt-0' style={{ fontFamily: "Smooch Sans" }}>STACK</h1>
                    </div>
                    <div className='block relative flex-1'>
                        <h1 ref={charlieHeading2} className='block relative text-white text-3xl '>Powering Full-Stack Innovation With MongoDB, Express, React & Node Modern, Scalable & End-to-End Solutions</h1>
                        <p  ref={charlietext} className='block relative text-gray-300 text-md mt-5'>I build full-stack applications using the powerful MERN stack—MongoDB, Express.js, React.js, and Node.js. From backend logic to frontend interfaces, I craft seamless, high-performance solutions. With React, I create dynamic UIs; with Node and Express, I structure scalable server logic; and MongoDB handles flexible, efficient data storage. This stack empowers me to deliver fully responsive, real-time web apps. Whether it’s an eCommerce site, dashboard, or management system, MERN provides the agility and scalability to meet business goals. I ensure end-to-end integration, clean architecture, and modern coding standards. MERN isn’t just a stack—it’s my go-to ecosystem for building complete digital experiences.</p>
                        <img ref={charlieimage} src='/src/assets/Mern Dev Image 2.png' alt='image' className='w-full h-80 sm:h-130 object-cover rounded-2xl mt-15'></img>
                    </div>
                </div>
            </div>

            <h1 ref={techHeading} className='block relative text-white text-4xl w-[80%] md:w-[50%] text-left sm:text-center sm:left-1/2 sm:-translate-x-1/2 mt-15 font-bold'>Some <b className='font-bold text-blue-500'>Technologies</b> I Use to Build Scalable Solutions</h1>
            <p ref={techSubHeading} className='block relative w-[90%] md:w-[70%] sm:left-1/2 sm:-translate-x-1/2 text-white text-md text-left sm:text-center mt-5'>Your ideas deserve more than just code — they deserve a stunning, functional digital experience. From concept to launch, I build modern, responsive web solutions that stand out and deliver results.</p>

            <div className='flex relative w-full columns-3 box box-border flex-wrap gap-y-5 gap-x-5 justify-start sm:justify-center px-5 md:px-0 overflow-hidden mt-15'>
                {
                    techStack.map((tech, ind) => {
                        return <TechCard key={ind} data={tech} />
                    })
                }

                <div className='flex items-center h-40 w-100 relative rounded-lg px-8 py-4 z-10 text-center overflow-hidden'>
                    <div className='block box-border top-1/2 left-1/2'>
                        <h1 className='font-bold text-gray-300 font-lg text-center mb-0'>The Stack is Just the Start</h1>
                        <p className='font-normal text-gray-300 text-[12px] mt-0'>From here, the stack only gets smarter, stronger, and more powerful</p>
                    </div>
                </div>

            </div>


        </div>
        <Testimonials />
        </>
    )
}

export default AboutMeMain
