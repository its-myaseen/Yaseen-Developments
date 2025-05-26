import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  const NavBar = useRef(null) // Reference for the navigation bar
  const NavItems = useRef(null) // Reference for the navigation items
  const NavButtons = useRef(null) // Reference for the navigation buttons
  const NavLogo = useRef(null) // Reference for the navigation logo
  const button = useRef(null) // Reference for the "Get Started" button
 
  // Create a GSAP timeline for animations
  const tl = gsap.timeline()

  useGSAP(() => {
    // Animation for the navigation bar
    tl.from(NavBar.current, { 
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.5
    })

    // Animation for the navigation bar Logo, Working Correctly
    tl.from(NavLogo.current, {
      y: -80,
      opacity: 0,
      duration: 1.2,
    })

    // Animation for the navigation items, Not Working Correctly
    tl.fromTo(".NavBar-Navigation", {
      y: -80,
      opacity: 0,
     // Stagger the animation for each button
    },{
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: 'power1.in'
    }, '-=2')

    tl.fromTo(button.current, {
      xPercent: 100,
      opacity: 0,
    }, {
      xPercent: 0,
      opacity: 1,
      duration: 2,
      ease: 'sine.in'
    }, '-=1')
    
  })
  return (
    <div ref={NavBar} className='flex absolute h-11 text-[12px] sm:text-[17px] sm:h-16 w-9/10 bg-black left-1/2 -translate-x-1/2 top-5 rounded-full justify-center sm:justify-between items-center px-6 overflow-hidden z-10'>
      <img src="/src/assets/Logo-GIF.gif" ref={NavLogo} alt="logo" className='hidden sm:block relative h-16 ' />
      <ul ref={NavItems} className='flex gap-10 sm:gap-15 text-white'>
        <li ref={NavButtons} className='NavBar-Navigation cursor-pointer hover:scale-110 duration-[350ms]'> <Link to='/home'>Home </Link></li>
        <li ref={NavButtons}  className='NavBar-Navigation cursor-pointer hover:scale-110 duration-[350ms]'> <Link to='/Services'>Services </Link></li>
        <li ref={NavButtons}  className='NavBar-Navigation cursor-pointer hover:scale-110 duration-[350ms]'> <Link to='/AboutMe'> About </Link></li>
        <li ref={NavButtons}  className='NavBar-Navigation cursor-pointer hover:scale-110 duration-[350ms]'> <Link to='/Contact'> Contact </Link></li>
      </ul>

      <Link to="/Contact">  <button ref={button} className='button hidden lg:block h-10 px-6 bg-transparent border border-white text-white rounded-full hover:scale-110 hover:cursor-pointer duration-[350ms]'>Get Started</button> </Link>
    </div>
  );
};

export default NavigationBar;