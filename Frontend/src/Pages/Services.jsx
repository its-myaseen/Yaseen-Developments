import React from 'react'

import ScrollerText1 from '../Components/ScrollerText1'
import PagesHeader1 from '../Components/PagesHeader1'
import ServiceMain from '../Components/ServiceMain'
import ScrollerText2 from '../Components/ScrollerText2'

const Services = () => {

  const heading = "Services"
  return (
    <div className='pb-20'>
      <PagesHeader1 data={heading}></PagesHeader1>
      <ServiceMain></ServiceMain>
      <ScrollerText2></ScrollerText2>
    </div>
  )
}

export default Services
