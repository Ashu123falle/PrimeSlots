import React, { useState } from 'react'
import Footer from '@/Components/Footer'
import BlogCard from '@/Components/blogCard'
import Searchapi from '../api/SearchPageapi'
import Navbar from '@/Components/Navbar'
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'
import ServiceSection from '@/Components/ServicesSection'

const SearchResultPage = () => {

    const [searchData, setsearchData] = useState(Searchapi);

    return (
        <div className='box-border'>
            <Navbar/>
            <div>
                   <h1 className='px-5 py-4 mb-[-10px] text-[14px]'><span className='text-gray-400 '> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
                   <hr className='border border-gray-300 w-[100vw]' />
                   <h2 className='text-right py-3 text-[14px] px-5'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
             </div>

        <div className="px-5 md:px-8 xl:px-16 pb-6">
             <ul className='flex flex-wrap justify-around h-[120vh] overflow-y-auto w-full'>
                   {
                       searchData.map((curElem, ind) => {
                           return <BlogCard key={ind} data={curElem} />
                       })
                   }
               </ul>
        

            <hr className='border border-gray-300 my-4 w-[99vw]'/>

            <div className="pt-2">
                <h1 className='text-2xl md:text-3xl font-bold mb-5'>People also looked for</h1>
            
                <PeopleAlsoLookFor/>
            </div>

            <ServiceSection/>
        </div>

        <Footer/>
        </div>
    )
}

export default SearchResultPage