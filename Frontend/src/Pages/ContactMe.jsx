import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../assets/Animation - 1747794974724.json'
import PagesHeader1 from '../Components/PagesHeader1'
import ContactMeHeader from '../Components/ContactMeHeader'
import ContactMeForm from '../Components/ContactMeForm'
import ScrollerText2 from '../Components/ScrollerText2'
import Alert from '../Components/Alert'
import ContactDetailsPopup from '../Components/ContactDetailsPopup'

const ContactMe = () => {
    const heading = "Contact Me"
    return (
        <div className='block relative pb-20 w-full overflow-hidden'>
            <PagesHeader1 data={heading}/>
            <ContactMeHeader/>
            <ContactMeForm/>
            <ScrollerText2/>
        </div>
    )
}

export default ContactMe
