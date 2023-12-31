import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../Components/Footer/index'
import Banner from '@/Components/Banner'
import OurAdvantage from '@/Components/OurAdvantage'
import LightBox from '@/Components/LightBox'
import Unleasing from '@/Components/Unleashing'
import JoinTheBrand from '@/Components/JoinTheBrand'
import StayLoop from '@/Components/StayLoop'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <div className='w-[100%] overflow-x-hidden'>
    <Banner />
    <div>
      <OurAdvantage/>
      <LightBox/>
      <Unleasing/>
      <JoinTheBrand/>
      <StayLoop/>
    </div>
    </div>
    </main>
  )
}