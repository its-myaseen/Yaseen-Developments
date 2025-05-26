import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'


export default function ScrolltoTop() {
    const {pathname} = useLocation()

    useEffect(()=>{
        const html = document.documentElement;
        html.classList.add("smooth-scroll");
        window.scrollTo(0,0)

        setTimeout(()=>{
            html.classList.remove("smooth-scroll")
        })
    }, [pathname])
}