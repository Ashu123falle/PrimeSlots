import React, { useState } from 'react'
import Footer from '@/Components/Footer'
import BlogCard from '@/Components/blogCard'
import Searchapi from '../api/SearchPageapi'
import Navbar from '@/Components/Navbar'
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'

const SearchResultPage = () => {

    const [searchData, setsearchData] = useState(Searchapi);

    

    return (
        <div className="">
            <div>
                   <h1 className='px-5 py-4 mb-[-10px] text-[14px]'><span className='text-gray-400 '> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
                   <hr className='border border-gray-300 w-[100vw]' />
                   <h2 className='text-right py-3 text-[14px] px-5'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
             </div>

        <div className="px-5 md:px-8 pb-5">
             <ul className='flex flex-wrap h-[90vh] overflow-y-auto w-full'>
                   {
                       searchData.map((curElem, ind) => {
                           return <BlogCard key={ind} id={curElem.id} image={curElem.image} heading={curElem.heading} name={curElem.name} description1={curElem.description1} description2={curElem.description2} description3={curElem.description3} description4={curElem.description4} />
                       })
                   }
               </ul>
        

            <hr className='border border-gray-300 my-4 w-[100vw]'/>

            <div className="pt-2">
            <h1 className='text-2xl md:text-3xl font-bold mb-5'>People also looked for</h1>
                
                <PeopleAlsoLookFor/>
            </div>
        </div>

        </div>
    )
}

export default SearchResultPage