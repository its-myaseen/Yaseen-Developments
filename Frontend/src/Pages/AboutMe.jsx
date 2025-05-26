import React from 'react'
import AboutMeHeader from '../Components/AboutMeHeader'
import PagesHeader1 from '../Components/PagesHeader1'
import AboutMeMain from '../Components/AboutMeMain'
import ScrollerText2 from '../Components/ScrollerText2'
const AboutMe = () => {
    const heading = "About Me"
    return (
        <div>
            <PagesHeader1 data={heading} />
            <AboutMeHeader />
            <AboutMeMain />
            <ScrollerText2/>
        </div>
    )
}

export default AboutMe
