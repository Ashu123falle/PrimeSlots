import {useContext, useEffect,useState} from 'react'
import { withRouter } from 'next/router';
import Link from 'next/link';

import Footer from '@/Components/Footer/Footer'
import BlogCard from '@/Components/blogCard/blogCard'
import Navbar from '@/Components/Navbar/Navbar'
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor/PeopleAlsoLookFor'
import ServiceSection from '@/Components/ServicesSection/ServicesSection'
import { AuthContext } from '@/Context/authContext';

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
const SearchResultPage = (props) => {
   const [searchData, setSearchData] = useState([])
   const {addFavMediadata} = useContext(AuthContext)
   const { pathname } = props.router || {};
   const [,pageName] = pathname.split('/') 
        

    useEffect(() => {
        setSearchData(Searchapi)
    },[])

   const onClickWishlistButton = id => {
       const updatedSearchData = searchData.map(obj => {
        if (obj.id === id) {
            addFavMediadata({...obj, isLiked: !obj.isLiked})
            return {...obj, isLiked: !obj.isLiked}
        }
        return obj
       })
        setSearchData(updatedSearchData) 
    }
        
    return (
        <div className='box-border'>
            <Navbar/>
            <div>
                    <div className='px-2 py-4 mb-[-10px] text-[14px] ml-6 md:px-7 xl:px-14'>
                    <Link href="/">
                        <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > <Link href="/">Home</Link> &nbsp; / </span>  </Link>
                    <span className= " mx-3 text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " >  <Link href={`${pageName}`}>{pageName}</Link> &nbsp; /</span> 
                    <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >Billboards</span>
                    </div>
                   <hr className='border border-gray-300 w-[100vw]' />
                   <h2 className='text-right py-3 text-[14px] px-5 md: pr-16 md:mr-16'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
             </div>
        

        <div className="px-8 pb-2">
             <ul className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 justify-center items-start
              h-[80vh] xl:h-[70vh] overflow-y-auto w-full'>
                   {
                       searchData.map((curElem, ind) => {
                           return <BlogCard key={ind} data={curElem} onClickWishlistButton = {onClickWishlistButton}/>
                       })
                   }
               </ul>
        </div>

            <hr className='border border-gray-300 my-4 w-[99vw]'/>

            <div className="mt-8 pl-8">
                <h1 className='text-2xl md:text-3xl font-bold mb-5 mx-3'>People also looked for</h1>
            
                <PeopleAlsoLookFor/>

            </div>/

            <ServiceSection/>
            <Footer/>
       
        </div>
    )
    
}

export default withRouter(SearchResultPage)