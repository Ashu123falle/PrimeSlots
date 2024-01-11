
import { useRouter, withRouter } from 'next/router';
import Link from 'next/link';

import Footer from '@/Components/Footer/Footer'
import BlogCard from '@/Components/blogCard/blogCard'
import Navbar from '@/Components/Navbar/Navbar'
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor/PeopleAlsoLookFor'
import {useEffect , useContext, useState } from 'react';
import { AuthContext } from '@/Context/authContext';
import ServiceSectionBlue from '@/Components/ServiceSectionBlue/ServiceSectionBlue';


const Favourites = () => {
    const {favouriteMediaData,setFavMediadata} = useContext(AuthContext)
    const [favApiData,setFavApiData] = useState([])
    const router = useRouter()
    const {pathname} = router ; 
    const [,pathOne,pathTwo] = pathname.split("/")
    
    useEffect(() => {
        console.log("favourites", favouriteMediaData, favApiData)
        setFavApiData(favouriteMediaData)
    },[favouriteMediaData,favApiData])

    const onClickRemoveFromWishlist = id => {
          const filteredFavMedia = favouriteMediaData.filter(obj => obj.id !== id)
          setFavMediadata(filteredFavMedia)
    }
 
    return (
        <div className='box-border'>
            <Navbar/>

            <div>
                <div className='px-2 py-4 mb-[-10px] text-[14px] ml-6 md:px-7 xl:px-14'>
                    <Link href="/">
                        <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > <Link href="/">Home </Link> &nbsp; / </span>  </Link>
                    <span className= " mx-3 text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " >  <Link href={`/${pathOne}`}>{pathOne}</Link> &nbsp; /</span>
                    <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >{pathTwo}</span>
                    </div>
                   <hr className='border border-gray-300 w-[100vw]' />
                <h2 className='text-right py-3 text-[14px] px-5 md: pr-16 md:mr-16'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
            </div>
        
        <div className="px-8 pb-2">
             {favApiData.length <= 0 ? (
                <div className='flex h-[50vh] justify-center items-center'>
               <h1 className="text-2xl font-['Playfair']">No favourites, add some here.. </h1> </div>):
               (<ul className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 justify-center items-start
               h-[80vh] xl:h-[70vh] overflow-y-auto w-full'>
                    {
                        favApiData.map((curElem, ind) => {
                            return <BlogCard key={ind} data={curElem} onClickWishlistButton = {onClickRemoveFromWishlist}/>
                        })
                    }
                </ul>)}
        </div>

            <hr className='border border-gray-300 my-4 w-[99vw]'/>

            <div className="mt-8 pl-8">
                <h1 className='text-2xl md:text-3xl font-bold mb-5 mx-3'>People also looked for</h1>
            
                <PeopleAlsoLookFor/>

            </div>/

            <ServiceSectionBlue/>
            <Footer/>
       
        </div>
    )
    
}

export default withRouter(Favourites)