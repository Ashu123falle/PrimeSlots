
import Navbar from "@/Components/Navbar/Navbar"
import { CategoryCard } from "@/Components/CategoryCard/CategoryCard"
import Footer from "@/Components/Footer/Footer"

import React,{ useEffect, useState, useContext } from "react"
import Link from 'next/link'
import NewListingsComponent from "../../Components/NewListingsComponent/NewListingsComponent"
import BlogCard  from "@/Components/blogCard/blogCard"
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor/PeopleAlsoLookFor'
import ServiceSection from "@/Components/ServicesSection/ServicesSection"
import { AuthContext } from "@/Context/authContext"

const hotpicks = [
  {
      id:10,
      image:"/assets/Switch.png",
      name:"Title of media will come here",
      description1: "Real Estate",
      description2: "Retail",
      description3: "Resturants",
      description4: "AutoMobile"
  },

  {
      id:11,
      image:"/assets/Switch (1).png",
      heading:"Digital Boarding",
      name:"Title of media will come here",
      description1: "Real Estate",
      description2: "Retail",
      description3: "Resturants",
      description4: "AutoMobile"
  },

  {
      id:12,
      image:"/assets/Switch (2).png",
      heading:"Digital Boarding",
      name:"Title of media will come here",
      description1: "Real Estate",
      description2: "Retail",
      description3: "Resturants",
      description4: "AutoMobile"
  },

  {
      id:13,
      image:"/assets/Switch (3).png",
      heading:"Digital Boarding",
      name:"Title of media will come here",
      description1: "Real Estate",
      description2: "Retail",
      description3: "Resturants",
      description4: "AutoMobile"
  },
  {
      id:14,
      image:"/assets/Switch.png",
      heading:"Digital Boarding",
      name:"Title of media will come here",
      description1: "Real Estate",
      description2: "Retail",
      description3: "Resturants",
      description4: "AutoMobile"
  },
  {
      id:15,
      image:"/assets/Switch (1).png",
      heading:"Digital Boarding",
      name:"Title of media will come here",
      description1: "Real Estate",
      description2: "Retail",
      description3: "Resturants",
      description4: "AutoMobile"
  },
  {
      id:16,
      image:"/assets/Switch (2).png",
      heading:"Digital Boarding",
      name:"Title of media will come here",
      description1: "Real Estate",
      description2: "Retail",
      description3: "Resturants",
      description4: "AutoMobile"
  },

]

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

export default function Home() {

  const [hotPicksData, setHotPicksData] = useState([])
  const {addFavMediadata} = useContext(AuthContext)

  useEffect(() => {
    setHotPicksData(hotpicks)
  },[])

  const onClickWishlistButton = id => {
    const updatedSearchData = hotPicksData.map(obj => {
      if (obj.id === id) {
        addFavMediadata(obj)
        
          return {...obj, isLiked: !obj.isLiked}
      }
      return obj
    })
    setHotPicksData(updatedSearchData)
}

  
    return (
      <main className="bg-whitebg-cover w-full">
        <Navbar/>

        <div>
            <h1 className='px-5 py-4 ml-5 mb-[-10px] text-[16px] px-5 md:px-8 xl:px-16 font-["Figtree"] leading-tight '>
              <Link href="/">
              <span className='text-gray-400 '> Home  </span> </Link>
            <span className='text-gray-400 mx-2'> / </span>
             <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight mx-2"> MarketPlace</span> </h1>
            <hr className='border border-gray-300 w-[100vw] mb-3' />
        </div>
        
        <div className=" catgeories my-6 flex flex-col w-full pl-5 md:pl-8 xl:pl-16">
          <h1 className="text-color-4-text text-left mx-5 font-['Figtree-SemiBold',_sans-serif] text-base leading-5 font-semibold uppercase text-[#224757] my-5">CATEGORIES</h1>
          <h1 className="text-secondarycolor-1 text-left mx-5 font-['Figtree-Bold',_sans-serif] text-2xl leading-[17.5px] font-bold relative text-[#00002E] my-5">BROWSE BY CATEGORY</h1>

          <ul className=" categories flex justify-start items-center overflow-visible overscroll-auto overflow-x-scroll no-scrollbar md: p-3 ">
              {categoriesList.map(each => (
                <CategoryCard key={each.id} title={each.title} imageUrl={each.imageUrl} alt={each.alt} />
                ))}
          </ul>
        </div>

        <div className="buttons hidden mt-4 mr-2 flex justify-end md: mr-14">
                
          
              <button class="bg-secondary shrink-0 w-[46px] h-[46px] relative rounded-[50%]">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
                >
                  <svg
                  class="h-[auto] absolute right-[23.91%] left-[23.91%] w-[52.17%] bottom-[23.91%] top-[23.91%] h-[52.17%] overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
                

              </button>

              <button class="bg-[#e2b9ff] rounded-[50%] w-[46px] h-[46px] relative">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex justify-center items-center"
                >

              <svg
                  class="w-6 h-6 relative overflow-visible"
                  
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19L20 12L13 5M20 12L4 12"
                    stroke="#131C5F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                </div>
                

              </button>

        </div>


        <div className="hotpicks mt-5 overflow-hidden pl-5 md:pl-8 xl:pl-16" style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/f14e/b26d/1d680359edae64cf6d1becafa42a77ac?Expires=1704067200&Signature=FzkKVug~zZWkX09UFDrVfIEHZKaoeZkiaDb1dP~6RxpSWaFWx7xhHf3vcYjM6H5K3Rihl9M89LWtH-o7Hofp1nXxIiVALFj3kMehkMI~Wo52E75s~yi9UMHOPOSLSHu3~EzwhGbERL3qU6GllRaYyGZa-X9gERVJ~TlH8Rqfoq-dcND7mMFHwkAbPKbvxZQntrVOobTeipgnW2qkIZvq0c1IYdg29C8UIfONdio-EEiNkhLK6FHpJVOYdNdd1XvxOkkL6CgTHK~jLJDx2KuSukWAvOVCIJzaZBwfirSJPNRXcbQTZUNn3~jmyP5L~RQopYuKPivwgg3WaGb6cVbAog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")', height: "610px", backgroundSize: "cover", width: "100%"}}>
          <h1 className="text-secondarycolor-1 mx-5 my-7 text-left font-['Inter-Bold',_sans-serif] text-3xl leading-[48px] font-bold  text-[#181265]">Prime Slots Exclusive!⭐</h1>
           <ul className="ml-3 categories flex justify-start items-center overscroll-auto overflow-x-scroll no-scrollbar">
              {hotPicksData.map(each => (
                <BlogCard key={each.id} data = {each} onClickWishlistButton= {onClickWishlistButton} />
                ))} 
          </ul> 

          <Link href=""><h1 className="text-[#181263] text-center self-end font-['Figtree-SemiBold',_sans-serif] text-xl leading-[22px] mt-7 font-semibold relative flex self-end justify-center text-[#D292FF]">View All Products 
          <svg
                    class="w-6 h-6 relative overflow-visible text-[#181263]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 19L20 12L13 5M20 12L4 12"
                      stroke="#D292FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
              </h1>
            </Link>

            <div className="buttons hidden  flex justify-end mb-5 md:mr-7">
                
          
              <button class="bg-secondary shrink-0 w-[46px] h-[46px] relative rounded-[50%]">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
                >
                  <svg
                  class="h-[auto] absolute right-[23.91%] left-[23.91%] w-[52.17%] bottom-[23.91%] top-[23.91%] h-[52.17%] overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
                

              </button>

              <button class="bg-[#e2b9ff] rounded-[50%] w-[46px] h-[46px] relative">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex justify-center items-center"
                >

              <svg
                  class="w-6 h-6 relative overflow-visible"
                  
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19L20 12L13 5M20 12L4 12"
                    stroke="#131C5F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                </div>
                

              </button>


              


          </div>

        </div>

        
        <div className="hotpicks p-3 mt-6 pl-7 overscroll-auto overflow-x-scroll no-scrollbar pl-5 md:pl-8 xl:pl-16">
          <h1 className="text-secondarycolor-1 mx-3 mt-4 text-left font-['Inter-Bold',_sans-serif] text-2xl leading-none font-bold  text-[#00002E] md: mx-8 ">Hot Pics 🔥</h1>
          <PeopleAlsoLookFor/> 
        </div>

        <div className="buttons hidden mb-3 flex justify-end md:mr-16 pr-5">
                
          
              <button class="bg-secondary shrink-0 w-[46px] h-[46px] relative rounded-[50%]">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
                >
                  <svg
                  class="h-[auto] absolute right-[23.91%] left-[23.91%] w-[52.17%] bottom-[23.91%] top-[23.91%] h-[52.17%] overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
                

              </button>

              <button class="bg-[#e2b9ff] rounded-[50%] w-[46px] h-[46px] relative">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex justify-center items-center"
                >

              <svg
                  class="w-6 h-6 relative overflow-visible"
                  
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19L20 12L13 5M20 12L4 12"
                    stroke="#131C5F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                </div>
                

              </button>

          </div>
          
          <div className="flex-col mt-6 items-center justify-center ml-1">
          <NewListingsComponent />
          </div>
          
          <ServiceSection />
          <Footer/>
      </main>
    )
  }
