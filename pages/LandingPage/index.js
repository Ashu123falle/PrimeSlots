import React from 'react'
import OurAdvantage from './OurAdvantage'
import LightBox from './LightBox'
import Unleasing from './Unleashing'
import StayLoop from './StayLoop'
import JoinTheBrand from '@/Components/JoinTheBrand'
import Banner from './Banner'

const LandingPage = () => {
  return (
    <div className='w-[100%] overflow-x-hidden'>
    <Banner />
    <OurAdvantage/>
    <LightBox/>
    <Unleasing/>
    <JoinTheBrand/>
    <StayLoop/>
    </div>
  )
}

export default LandingPage