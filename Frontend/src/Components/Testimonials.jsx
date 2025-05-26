import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import animationData from '../assets/TickAnim.json'


import { Pagination } from 'swiper/modules';
import Lottie from 'lottie-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const animation = useRef()
    const heading = useRef()
    const subHeading = useRef()
    const scroller = useRef()

    useGSAP(()=>{
        gsap.from(animation.current, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: animation.current,
                start: "top 85%",
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(heading.current, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: heading.current,
                start: "top 85%",
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(subHeading.current, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: subHeading.current,
                start: "top 85%",
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(scroller.current, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: scroller.current,
                start: "top 85%",
                toggleActions: 'play none none reverse'
            }
        })

    })

    return (
        <div className='block relative sm:pb-20 w-full pt-10 md:pt-30 pb-15 overflow-hidden'>
            <Lottie ref={animation} animationData={animationData} loop={true} className='block relative h-50 top-3'></Lottie>
            <h1 ref={heading} className='block relative text-center text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Trusted by Clients Worldwide</h1>
            <p ref={subHeading} className='block relative w-[90%] md:w-[80%] lg:w-[60%] text-center text-gray-200 md:text-[12px] lg:text-[15px] left-1/2 -translate-1/2 mt-16 sm:mt-11 md:mt-7 lg:mt-10'>From startups to established enterprises, businesses around the globe rely on our expertise to bring their digital visions to life. Explore what our clients have to say about working with us.</p>
            <Swiper
            ref={scroller}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper mt-0 sm:mt-5 md:mt-13"
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 7,

                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide className='block relative w-10 sm:h-80 md:h-60 sm:w-[33.3%] bg-[#f0f8ff17] rounded-xl duration-300 overflow-hidden'>
                    <div className='flex justify-between px-5 pt-5'>
                        <div className='flex sm:flex-col md:flex-row gap-4'>
                            <img src='/src/assets/Dp1.jpg' alt='profile image' className='block relative h-13 w-13 rounded-full'></img>
                            <div className='block relative box-border'>
                                <h1 className='block relative font-bold sm:text-center md:text-left text-white text-md'>Michael Thompson</h1>
                                <p className='block text-gray-300 text-[11px]'>Event Booking Platform</p>
                            </div>
                        </div>
                        <svg className='hidden lg:block rel h-8 w-8 fill-blue-500 '
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 375 374.999991"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <clipPath id="clip1">
                                    <path
                                        d="M 193 33.058594 L 374.996094 33.058594 L 374.996094 333 L 193 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                                <clipPath id="clip2">
                                    <path
                                        d="M 0 33.058594 L 182 33.058594 L 182 333 L 0 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip1)">
                                <path
                                    d="M 250.21875 168.722656 C 260.871094 164.664062 272.535156 162.125 284.707031 162.125 C 334.671875 162.378906 374.996094 200.4375 374.996094 247.125 C 374.996094 293.808594 334.671875 332.121094 284.707031 332.121094 C 234.746094 332.121094 194.421875 294.0625 194.421875 247.125 C 181.742188 122.289062 329.34375 33.992188 329.34375 33.992188 L 341.011719 47.949219 C 341.011719 48.203125 243.371094 123.8125 250.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                            <g clipPath="url(#clip2)">
                                <path
                                    d="M 57.21875 168.722656 C 67.871094 164.664062 79.539062 162.125 91.710938 162.125 C 141.671875 162.125 181.996094 200.183594 181.996094 247.125 C 181.996094 294.0625 141.671875 332.121094 91.710938 332.121094 C 41.75 332.121094 1.425781 294.0625 1.425781 247.125 C -11.253906 122.289062 136.347656 33.992188 136.347656 33.992188 L 148.011719 47.949219 C 148.011719 48.203125 50.371094 123.8125 57.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                        </svg>

                    </div>

                    <div className='pb-5 px-5 pt-5 box-border'>
                        <p className='text-gray-100 text-[13px]'>Muhammad Yaseen created a professional business website for our logistics firm. Though not built with MERN, the site is fast, responsive, and polished. Their design and development workflow was clear and efficient from start to finish.</p>
                    </div>
                </SwiperSlide>






                <SwiperSlide className='block relative sm:h-80 md:h-60 sm:w-[33.3%] bg-[#f0f8ff17] rounded-xl duration-300'>
                    <div className='flex justify-between px-5 pt-5'>
                        <div className='flex sm:flex-col md:flex-row gap-4'>
                            <img src='/src/assets/Dp2.jpg' alt='profile image' className='block relative w-13 h-13 rounded-full'></img>
                            <div className='block relative box-border'>
                                <h1 className='block relative font-bold text-white text-md'>Sophie Williams</h1>
                                <p className='block text-gray-300 text-[11px]'>Responsive Portfolio Website</p>
                            </div>
                        </div>
                        <svg className='hidden lg:block rel h-8 w-8 fill-blue-500'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 375 374.999991"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <clipPath id="clip1">
                                    <path
                                        d="M 193 33.058594 L 374.996094 33.058594 L 374.996094 333 L 193 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                                <clipPath id="clip2">
                                    <path
                                        d="M 0 33.058594 L 182 33.058594 L 182 333 L 0 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip1)">
                                <path
                                    d="M 250.21875 168.722656 C 260.871094 164.664062 272.535156 162.125 284.707031 162.125 C 334.671875 162.378906 374.996094 200.4375 374.996094 247.125 C 374.996094 293.808594 334.671875 332.121094 284.707031 332.121094 C 234.746094 332.121094 194.421875 294.0625 194.421875 247.125 C 181.742188 122.289062 329.34375 33.992188 329.34375 33.992188 L 341.011719 47.949219 C 341.011719 48.203125 243.371094 123.8125 250.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                            <g clipPath="url(#clip2)">
                                <path
                                    d="M 57.21875 168.722656 C 67.871094 164.664062 79.539062 162.125 91.710938 162.125 C 141.671875 162.125 181.996094 200.183594 181.996094 247.125 C 181.996094 294.0625 141.671875 332.121094 91.710938 332.121094 C 41.75 332.121094 1.425781 294.0625 1.425781 247.125 C -11.253906 122.289062 136.347656 33.992188 136.347656 33.992188 L 148.011719 47.949219 C 148.011719 48.203125 50.371094 123.8125 57.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                        </svg>

                    </div>

                    <div className='pb-5 px-5 pt-5 box-border'>
                        <p className='text-gray-100 text-[13px]'>I wanted a modern, responsive portfolio to showcase my work — and Muhammad Yaseen nailed it with a MERN stack-based site. It’s minimal, fast, and perfectly aligned with my personal brand. Great experience!</p>
                    </div>
                </SwiperSlide>





                <SwiperSlide className='block relative sm:h-80 md:h-60 sm:w-[33.3%] bg-[#f0f8ff17] rounded-xl duration-300'>
                    <div className='flex justify-between px-5 pt-5'>
                        <div className='flex sm:flex-col md:flex-row gap-4'>
                            <img src='/src/assets/Dp3.jpg' alt='profile image' className='block relative h-13 w-13 rounded-full'></img>
                            <div className='block relative box-border'>
                                <h1 className='block relative font-bold text-white text-md'>Emily Carter</h1>
                                <p className='block text-gray-300 text-[11px]'>Real Estate Website with Job Portal</p>
                            </div>
                        </div>
                        <svg className='hidden lg:block rel h-8 w-8 fill-blue-500'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 375 374.999991"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <clipPath id="clip1">
                                    <path
                                        d="M 193 33.058594 L 374.996094 33.058594 L 374.996094 333 L 193 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                                <clipPath id="clip2">
                                    <path
                                        d="M 0 33.058594 L 182 33.058594 L 182 333 L 0 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip1)">
                                <path
                                    d="M 250.21875 168.722656 C 260.871094 164.664062 272.535156 162.125 284.707031 162.125 C 334.671875 162.378906 374.996094 200.4375 374.996094 247.125 C 374.996094 293.808594 334.671875 332.121094 284.707031 332.121094 C 234.746094 332.121094 194.421875 294.0625 194.421875 247.125 C 181.742188 122.289062 329.34375 33.992188 329.34375 33.992188 L 341.011719 47.949219 C 341.011719 48.203125 243.371094 123.8125 250.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                            <g clipPath="url(#clip2)">
                                <path
                                    d="M 57.21875 168.722656 C 67.871094 164.664062 79.539062 162.125 91.710938 162.125 C 141.671875 162.125 181.996094 200.183594 181.996094 247.125 C 181.996094 294.0625 141.671875 332.121094 91.710938 332.121094 C 41.75 332.121094 1.425781 294.0625 1.425781 247.125 C -11.253906 122.289062 136.347656 33.992188 136.347656 33.992188 L 148.011719 47.949219 C 148.011719 48.203125 50.371094 123.8125 57.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                        </svg>

                    </div>

                    <div className='pb-5 px-5 pt-5 box-border'>
                        <p className='text-gray-100 text-[13px]'>Muhammad Yaseen developed a comprehensive real estate website for our agency, complete with a custom job portal. Built using the MERN stack, it’s fast, secure, and easy to manage. The attention to detail and responsiveness from their team was outstanding.</p>
                    </div>
                </SwiperSlide>





                <SwiperSlide className='block relative sm:h-80 md:h-60 sm:w-[33.3%] bg-[#f0f8ff17] rounded-xl duration-300'>
                    <div className='flex justify-between px-5 pt-5'>
                        <div className='flex sm:flex-col md:flex-row gap-4'>
                            <img src='/src/assets/Dp4.jpg' alt='profile image' className='block relative h-13 w-13 rounded-full'></img>
                            <div className='block relative box-border'>
                                <h1 className='block relative font-bold text-white text-md'>Daniel Roberts</h1>
                                <p className='block text-gray-300 text-[11px]'>Core Website for Logistics Firm</p>
                            </div>
                        </div>
                        <svg className='hidden lg:block rel h-8 w-8 fill-blue-500'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 375 374.999991"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <clipPath id="clip1">
                                    <path
                                        d="M 193 33.058594 L 374.996094 33.058594 L 374.996094 333 L 193 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                                <clipPath id="clip2">
                                    <path
                                        d="M 0 33.058594 L 182 33.058594 L 182 333 L 0 333 Z"
                                        clipRule="nonzero"
                                    />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip1)">
                                <path
                                    d="M 250.21875 168.722656 C 260.871094 164.664062 272.535156 162.125 284.707031 162.125 C 334.671875 162.378906 374.996094 200.4375 374.996094 247.125 C 374.996094 293.808594 334.671875 332.121094 284.707031 332.121094 C 234.746094 332.121094 194.421875 294.0625 194.421875 247.125 C 181.742188 122.289062 329.34375 33.992188 329.34375 33.992188 L 341.011719 47.949219 C 341.011719 48.203125 243.371094 123.8125 250.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                            <g clipPath="url(#clip2)">
                                <path
                                    d="M 57.21875 168.722656 C 67.871094 164.664062 79.539062 162.125 91.710938 162.125 C 141.671875 162.125 181.996094 200.183594 181.996094 247.125 C 181.996094 294.0625 141.671875 332.121094 91.710938 332.121094 C 41.75 332.121094 1.425781 294.0625 1.425781 247.125 C -11.253906 122.289062 136.347656 33.992188 136.347656 33.992188 L 148.011719 47.949219 C 148.011719 48.203125 50.371094 123.8125 57.21875 168.722656 Z"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </g>
                        </svg>

                    </div>

                    <div className='pb-5 px-5 pt-5 box-border'>
                        <p className='text-gray-100 text-[13px]'>Muhammad Yaseen created a professional business website for our logistics firm. Though not built with MERN, the site is fast, responsive, and polished. Their design and development workflow was clear and efficient from start to finish</p>
                    </div>
                </SwiperSlide>




                <SwiperSlide className='block relative sm:h-80 md:h-60 sm:w-[33.3%] bg-[#f0f8ff17] rounded-xl duration-300'><div className='flex justify-between px-5 pt-5 duration-300'>
                    <div className='flex sm:flex-col md:flex-row gap-4'>
                        <img src='/src/assets/Dp5.jpg' alt='profile image' className='block relative h-13 w-13 rounded-full'></img>
                        <div className='block relative box-border'>
                            <h1 className='block relative font-bold text-white text-md'>Dr. Olivia Bennett</h1>
                            <p className='block text-gray-300 text-[11px]'>full-featured college management system</p>
                        </div>
                    </div>
                    <svg className='hidden lg:block rel h-8 w-8 fill-blue-500'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 375 374.999991"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <clipPath id="clip1">
                                <path
                                    d="M 193 33.058594 L 374.996094 33.058594 L 374.996094 333 L 193 333 Z"
                                    clipRule="nonzero"
                                />
                            </clipPath>
                            <clipPath id="clip2">
                                <path
                                    d="M 0 33.058594 L 182 33.058594 L 182 333 L 0 333 Z"
                                    clipRule="nonzero"
                                />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip1)">
                            <path
                                d="M 250.21875 168.722656 C 260.871094 164.664062 272.535156 162.125 284.707031 162.125 C 334.671875 162.378906 374.996094 200.4375 374.996094 247.125 C 374.996094 293.808594 334.671875 332.121094 284.707031 332.121094 C 234.746094 332.121094 194.421875 294.0625 194.421875 247.125 C 181.742188 122.289062 329.34375 33.992188 329.34375 33.992188 L 341.011719 47.949219 C 341.011719 48.203125 243.371094 123.8125 250.21875 168.722656 Z"
                                fillOpacity="1"
                                fillRule="nonzero"
                            />
                        </g>
                        <g clipPath="url(#clip2)">
                            <path
                                d="M 57.21875 168.722656 C 67.871094 164.664062 79.539062 162.125 91.710938 162.125 C 141.671875 162.125 181.996094 200.183594 181.996094 247.125 C 181.996094 294.0625 141.671875 332.121094 91.710938 332.121094 C 41.75 332.121094 1.425781 294.0625 1.425781 247.125 C -11.253906 122.289062 136.347656 33.992188 136.347656 33.992188 L 148.011719 47.949219 C 148.011719 48.203125 50.371094 123.8125 57.21875 168.722656 Z"
                                fillOpacity="1"
                                fillRule="nonzero"
                            />
                        </g>
                    </svg>

                </div>

                    <div className='pb-5 px-5 pt-5 box-border'>
                        <p className='text-gray-100 text-[13px]'>Muhammad Yaseen developed a full-featured college management system for us, handling admissions, exams, attendance, and fee management. It’s intuitive and has significantly improved our internal processes. Excellent work!</p>
                    </div></SwiperSlide>



                <SwiperSlide className='block relative sm:h-80 md:h-60 sm:w-[33.3%] bg-[#f0f8ff17] rounded-xl duration-300'><div className='flex justify-between px-5 pt-5 duration-300'>
                    <div className='flex sm:flex-col md:flex-row gap-4'>
                        <img src='/src/assets/Profile Icon.jpg' alt='profile image' className='block relative h-13 w-13 rounded-full'></img>
                        <div className='block relative box-border'>
                            <h1 className='block relative font-bold text-white text-md'>Rachel Anderson </h1>
                            <p className='block text-gray-300 text-[11px]'>E-Commerce Store</p>
                        </div>
                    </div>
                    <svg className='hidden lg:block rel h-8 w-8 fill-blue-500'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 375 374.999991"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <clipPath id="clip1">
                                <path
                                    d="M 193 33.058594 L 374.996094 33.058594 L 374.996094 333 L 193 333 Z"
                                    clipRule="nonzero"
                                />
                            </clipPath>
                            <clipPath id="clip2">
                                <path
                                    d="M 0 33.058594 L 182 33.058594 L 182 333 L 0 333 Z"
                                    clipRule="nonzero"
                                />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip1)">
                            <path
                                d="M 250.21875 168.722656 C 260.871094 164.664062 272.535156 162.125 284.707031 162.125 C 334.671875 162.378906 374.996094 200.4375 374.996094 247.125 C 374.996094 293.808594 334.671875 332.121094 284.707031 332.121094 C 234.746094 332.121094 194.421875 294.0625 194.421875 247.125 C 181.742188 122.289062 329.34375 33.992188 329.34375 33.992188 L 341.011719 47.949219 C 341.011719 48.203125 243.371094 123.8125 250.21875 168.722656 Z"
                                fillOpacity="1"
                                fillRule="nonzero"
                            />
                        </g>
                        <g clipPath="url(#clip2)">
                            <path
                                d="M 57.21875 168.722656 C 67.871094 164.664062 79.539062 162.125 91.710938 162.125 C 141.671875 162.125 181.996094 200.183594 181.996094 247.125 C 181.996094 294.0625 141.671875 332.121094 91.710938 332.121094 C 41.75 332.121094 1.425781 294.0625 1.425781 247.125 C -11.253906 122.289062 136.347656 33.992188 136.347656 33.992188 L 148.011719 47.949219 C 148.011719 48.203125 50.371094 123.8125 57.21875 168.722656 Z"
                                fillOpacity="1"
                                fillRule="nonzero"
                            />
                        </g>
                    </svg>

                </div>

                    <div className='pb-5 px-5 pt-5 box-border'>
                        <p className='text-gray-100 text-[13px]'>Launching our online fashion store was made seamless thanks to Yaseen. They built a responsive, user-friendly e-commerce site with smooth checkout and product management features. Sales have been consistent since day one.</p>
                    </div></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonials
