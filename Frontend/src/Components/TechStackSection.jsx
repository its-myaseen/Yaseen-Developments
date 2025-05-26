import React, { useRef } from 'react'
import TechCard from './TechCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TechStackSection = () => {
    
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

    const techStackDiv = useRef();
          useGSAP(()=>{
              gsap.from(techStackDiv.current, {
                  yPercent: 100,
                  opacity: 0,
                  duration: 1,
                  ease: "back.out(1.7)",
                  scrollTrigger: {
                      trigger: techStackDiv.current,
                      start: "top 80%",
                      toggleActions: 'play none none reverse'
                  }
              })
          })
    return (
        <div className='flex relative w-screen columns-3 box box-border flex-wrap gap-y-5 gap-x-5 justify-center px-5 md:px-0 overflow-hidden'>
            {
                techStack.map((tech, ind) => {
                    return <TechCard key={ind} data={tech} />
                })
            }

            <div ref={techStackDiv} className='flex items-center h-40 w-100 relative rounded-lg px-8 py-4 z-10 text-center overflow-hidden'>
                <div className='block box-border top-1/2 left-1/2'>
                    <h1 className='font-bold text-gray-300 font-lg text-center mb-0'>The Stack is Just the Start</h1>
                    <p className='font-normal text-gray-300 text-[12px] mt-0'>From here, the stack only gets smarter, stronger, and more powerful</p>
                </div>
            </div>

        </div>
    )
}

export default TechStackSection
