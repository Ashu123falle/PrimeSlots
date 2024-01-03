import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../Components/Footer/index'
import Banner from '@/Components/Banner'
import OurAdvantage from '@/Components/OurAdvantage'
import LightBox from '@/Components/LightBox'
import Unleasing from '@/Components/Unleashing'
import JoinTheBrand from '@/Components/JoinTheBrand'
import StayLoop from '@/Components/StayLoop'
import { CategoryCard } from '@/Components/CategoryCard'
import Testimonials from '@/Components/Testomonials'

const categoriesList = [
  {
    id: 0,
    title: 'Neon Site',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/b426/6b37/1e58dcdea3b5e1ea4011aa8ab793919f?Expires=1704067200&Signature=Ybr6kGklfTJf8pfWz9Z71rcMtvVQO2Xl5AIDTy17wkavqQcyDG79sGAVfR2U0n6N16wdXj4jW5HuKumCn0PwwpXu-tZuuhu4w6a7NAm-fcOa5Bl0w~bxlflOj5cBzdxOYiSXbqKaFNbiR2cJBApaiLdZanu2~SZhezoTYKkHgzQdll3zPOuimlQ5Je9Rye~xh6TVzYOVXViarjOu9vtUaxGXyA~ea-4t7hCvXXIv8b0HD9Yhr7Par3hEu660T2X~cU-h0od4ZU0esAqEQ8vaCZ8d3WnueH6lcQW~nBTfFM1hmoBscGhEXCJWJGueDIkdGvG7XmscvOpL52gmA79LHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img1",
  },
  {
    id: 1,
    title: 'Bill Boards',
    imageUrl:'https://s3-alpha-sig.figma.com/img/923a/40b9/9185769696ba1c70284e593b870059f9?Expires=1704067200&Signature=YgMsZW2MixRHbU09beOR10bHSi4WugDPCfkfqSYUY~~-MBfzkmSwb1kN8~GL4U06sv1NNEEW0hf4B1WnLJwyGiV0s5~aRiQO5ma5W04tndUQia70twYIOA9b9HTgZXZQ55~yNfcTnxK4CYLTRxSBIZd~kmnpAAuqxIeyoG1Gi88h6DHYyOYi2WxYVb6bhdIEGEySMs0WYh1LSvqvxfOV3Rw0NcHbTAAnR2qwP5c56llCg-1LVj855W1NdoAS7AKUYowbw738tPsomCWn0NJitrGONly0oKJjXuMlN7Gn3WgugwQe3ghA-bnGGUxVNa~aCtCq0p641N-dvA1PtiZ9cA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
     alt: "img2",
  },
  {
    id: 2,
    title: 'Info Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/2c33/43c3/dc4454ec44bff841c83240c9d6a28d9d?Expires=1704067200&Signature=Vpg~akui0kzflHLbcT1y~FBBRDeJit8Qx~CoezJVwN0xih0iRcb-vH3Qdm2gS0n2-MlDrylYluxal8XyFhHXNUMQhLzW0bs~Dku6Gllz~qjL9ihGM4-p2qpdjSMWCV5x3sa8YRp12lua4Dm8J1rcoTYIETnNdVCQHTIt1i1xmGTdaaOOBkWcT7oliz6lICN95-oi~O3dQScFO4Q0eWMzN8RxjIVKg31nL8OPHRbpfP5jatRMd5kwgMdkYGigBlDsLGb4M3pSJ7bZ1BTnLQGuaFN~QDStl7hFSzHArP-NG6uoIOP1n-xwq~fwsK6faXNrq~3PgQN5gdoSqbuIRknJBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img3",
  },
  {
    id: 3,
    title: 'Signage',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/df9c/e6c9/c7c29ea6894b9a0e539ba0af0ec2d8b4?Expires=1704067200&Signature=eiiaiL5w0zzy03CBlQfnSwTii3BpHXdGw7nDwqWHOfbbJhpBfslAo6CzfebEMqN8OeofC4uM2L~I6SCd1FfM9AQ7KaCcD5vdXuslJWLoWlOWdnIr8vsG47lMjdY-DTWY2xy7JETu9TBwU6McVLp5lsilst7Y2yXA8EJudpuoyT2kcV0TfRB6nans2M1t5v7U-ham3s0k9ELKWkhseOJAErhU7ia2qCbL8fm7xvAoGSaKea8CIKga5B1G3EHS7Vvo71~pbx4stDCJHfyDlHXGbJfrR2b4AjuO7H8TAzmQypS4HFl3m~kDt9r8-vp5Gind6jLTnYreEju6AW7huNxYdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 4,
    title: 'Bridge Sign',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d225/d223/3a9a55a2821d5db1d78f97451ca235cf?Expires=1704067200&Signature=BF0e92YdxK4FYJg1oidxpszLj8RJmam1Q~HpAUmQxx9nVYlqzS0qinKuiUGbWegVaIGgeFj8pV20e1FXIxqh52FSijz4cQ6Pby9zUTQC3awsKDtvWZZBdmEK~MqlCCa-NrhSWH2BioY00U3LnkiAozsebn~5vE7w64Kc67KKRKUrINfHmbSkto6JASZ0bDMoaRMdZuRU-oimvxORri9-NJ1tBzcAHILT4y6ybWNPc1GaYBOlKni1u-wSYmtSR7RqZvTLAV-utf7UONetyLDVY9nlunsu16LfXL~cC-8qlTHAnijuYyAociMrr8U1WSrfTdLZC9q3-xKcIjL9VQeuQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 5,
    title: 'Traffic Pedestals',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/f857/273d/84bee1c4bf273221b1c0820a0ae5ed3b?Expires=1704067200&Signature=fmjjQv56DLtumimRhI15eu3bz-8U5Sn~8OyG6aKIHkbZeyNgEgw~kYOQyFoMon-3ZIQ4-CA4q15jG19miw0XNvbH3HFvn34xSlH0XUq1RVs9kkw-se~2ywuh-BibswGzDG27BkAe-KinfPNtZxksgn-gURzXgWIm~HcPLxovaXtYrnhJ1-LWu7nKXxxOB-2hTQ-VQhu8W2WjPL-PvaS9Nw6i9UV99J3Cp-8Sr~zaB6wAQ4pUIJD64Ds-OhPGYpqxMQ9fmrokRUd1ThFs645zT84grQ8auFHhpXrjAFsDX2noS88ADnyiU1ADWj1IUlQPtd9hZJzcg5f2-EMfJDc4pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 6,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 9,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 7,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 8,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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