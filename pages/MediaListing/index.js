import React,{useState,useEffect} from 'react';
import FilterComponent from '../../Components/FilterComponent/FilterComponent';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import ServiceSection from "@/Components/ServicesSection/ServicesSection";
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor/PeopleAlsoLookFor';
import { CategoryCard } from '@/Components/CategoryCard/CategoryCard';
import BlogCard from '@/Components/blogCard/blogCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
//import PriceFilter from '@/Components/FilterMobileView';

const Searchapi = [
  {
    id:1,
    image:"/assets/Switch.png",   
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: true,
},

{
    id:2,
    image:"/assets/Switch (1).png",    
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: false,
},

{
    id:3,
    image:"/assets/Switch (2).png",     
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: false,
},

{
    id:4,
    image:"/assets/Switch (3).png",   
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: false,
},

{
    id:5,
    image:"/assets/Switch.png",   
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: false,
},

{
    id:6,
    image:"/assets/Switch (1).png",   
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: false,
},

{
    id:7,
    image:"/assets/Switch (2).png",   
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: false,
},

{
    id:8,
    image:"/assets/Switch (3).png",   
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile",
    isLiked: false,
},
]

const data = []

const optionsConfig = [
  {
    key: 'state',
    label: 'Search Location',
    options: ['All', 'Andhra Pradesh', 'Assam', 'Arunachal Pradesh'], // Add more states as needed
    default: 'All',
  },
  {
    key: 'category',
    label: 'Media Categories',
    options: ['All', 'category1', 'category2', 'category3'], // Add more categories as needed
    default: 'All',
  },
  {
    key: 'filter',
    label: 'Filters',
    options: ['All', 'filter1', 'filter2', 'filter3'], // Add more filters as needed
    default: 'All',
  },
];
// Example data

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
const MediaListingPage = () => {
   const [searchData, setsearchData] = useState(Searchapi);
   const [isSmallDevice, setIsSmallDevice] = useState(false);

   const router = useRouter();
  const { category } = router.query;
  const { pathname } = router;
  const [,pageName] = pathname.split("/")

   const onClickWishlistButton = id => {
    const updatedSearchData = searchData.map(obj => {
      if (obj.id === id) {
          return {...obj, isLiked: !obj.isLiked}
      }
      return obj
    })
    setsearchData(updatedSearchData)

}

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 640); // You can adjust the width based on your needs
    };

    // Initial check on mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='box-border' style={{ overflowX: 'hidden' }}>
      <Navbar />
      <div>
            <div className='px-5 py-4 mb-[-10px] text-[16px] ml-6 md:px-7 xl:px-14'>
            <Link href="/">
                <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> </Link>
              <span className= " mx-3 text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " >  {pageName} &nbsp; /</span> 
              <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >{category}</span>
            </div>
      
        <hr className='border border-gray-300 my-3 w-[99vw]' />

      </div>

      <div className="mt-6 catgeories my-10 flex flex-col w-full pl- md:pl-5 xl:pl-14">
          <h1 className="text-color-4-text text-left mx-8 font-['Figtree']
           text-sm sm:text-base leading-5 font-semibold uppercase text-[#224757] mt-5">CATEGORIES</h1>
          <h1 className="text-secondarycolor-1 text-left mx-8 font-['Figtree'] 
          text-3xl md:text-4xl leading-[17.5px] font-bold relative text-[#00002E] mb-5 mt-2">Browse By Category</h1>

          <ul className="ml-2 categories flex justify-start items-center overscroll-auto overflow-x-scroll no-scrollbar md: p-3 ">
              {categoriesList.map(each => (
                <CategoryCard key={each.id} title={each.title} imageUrl={each.imageUrl} alt={each.alt} />
                ))}
          </ul>
      </div>

      <FilterComponent data={data} optionsConfig={optionsConfig} />
      
      <div className="px-5 md:px-8 xl:px-8 pb-5">
      <ul className='flex flex-wrap justify-around max-h-[90vh] overflow-y-auto w-full overscroll-auto mb-4 '>
                   {
                       searchData.map((curElem, ind) => {
                           return <BlogCard key={ind} data={curElem} onClickWishlistButton = {onClickWishlistButton}/>
                       })
                   }
      </ul>

        <div>
      
        <hr className='border border-gray-300 mb-7 w-full absolute left-0 right-0' />
      
        
        </div>
        <div className="p-3 md:pl-8 xl:pl-7 h-full mt-5 md:pl-4 ">
        <h1 className="text-secondarycolor-1 mx-3 my-8 text-left font-['Inter'] text-2xl md:text-4xl leading-none font-bold 
         text-[#00002E] md:mx-0 md:mb-0">People also look for</h1>
          <PeopleAlsoLookFor/>
        </div>
        <ServiceSection />
      </div>
      <Footer/>
      
    </div>
  )
};

export default MediaListingPage;
