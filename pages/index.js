import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer/Footer'
import Banner from '@/components/Banner/Banner'
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage'
import LightBox from '@/components/LightBox/LightBox'
import Unleasing from '@/components/Unleashing/Unleashing'
import JoinTheBrand from '@/components/JoinTheBrand/JoinTheBrand'
import StayLoop from '@/components/StayLoop/StayLoop'
import { CategoryCard } from '@/components/CategoryCard/CategoryCard'
import Testimonials from '@/components/Testomonials/Testomonials'

const categoriesList = [
  {
    id: 0,
    title: 'Neon Site',
    imageUrl: '/assets/Rectangle 34624178.png', 
    alt: "img1",
  },
  {
    id: 1,
    title: 'Bill Boards',
    imageUrl: '/assets/Rectangle 34624178 (1).png',
    alt: "img2",
  },
  {
    id: 2,
    title: 'Info Board',
    imageUrl: '/assets/Rectangle 34624178 (2).png',
    alt: "img3",
  },
  {
    id: 3,
    title: 'Signage',
    imageUrl: '/assets/Rectangle 34624178 (3).png',
    alt: "img2",
  },
  {
    id: 4,
    title: 'Bridge Sign',
    imageUrl: '/assets/Rectangle 34624178 (4).png',
    alt: "img2",
  },
  {
    id: 5,
    title: 'Traffic Pedestals',
    imageUrl: '/assets/Rectangle 34624178 (5).png',
    alt: "img2",
  },
  {
    id: 6,
    title: 'LED Board',
    imageUrl: '/assets/Rectangle 34624178.png',
    alt: "img2",
  },
  {
    id: 9,
    title: 'LED Board',
    imageUrl: '/assets/Rectangle 34624178.png',
    alt: "img2",
  },
  {
    id: 7,
    title: 'LED Board',
    imageUrl: '/assets/Rectangle 34624178 (1).png',
    alt: "img2",
  },
  {
    id: 8,
    title: 'LED Board',
    imageUrl: '/assets/Rectangle 34624178 (2).png',
    alt: "img2",
  },
]

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <div className='w-[100%] overflow-x-hidden'>
    <Banner />

      <div className='mt-10 text-center mb-8'>
      <h1 class="text-slate-950 text-3xl font-bold font-['Playfair'] 
       leading-[48px] tracking-wider p-3">OOH media Solutions for </h1>
         <ul className="mt-3 categories flex justify-start items-center overflow-visible overscroll-auto overflow-x-scroll no-scrollbar md: p-3 ">
              {categoriesList.map(each => (
                <CategoryCard key={each.id} title={each.title} imageUrl={each.imageUrl} alt={each.alt} />
                ))}
          </ul>
      </div>

      <OurAdvantage/>
      <LightBox/>
      <Unleasing/>
      <Testimonials/>
      <JoinTheBrand/>
      <StayLoop/>
   
    
    <Footer/>
      </div>
    </main>
  )
}