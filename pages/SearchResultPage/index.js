import React, { useState } from 'react'
import Footer from '@/Components/Footer'
import BlogCard from '@/Components/blogCard'
import Searchapi from '../api/SearchPageapi'

const SearchResultPage = () => {

    const [searchData, setsearchData] = useState(Searchapi);

    return (
        <>
            <div className='my-5'>
                <div className=''>
                    <h1 className='ml-48 py-4'><span className='text-gray-400'> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
                    <hr className='border border-gray-300' />
                    <h2 className='text-right py-3 pr-52'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
                </div>

            <div className='pl-20 grid grid-cols-3 mx-24 px-14'>
                {
                    searchData.map((curElem,ind) =>{
                        return <BlogCard key={ind} id={curElem.id} image={curElem.image} heading={curElem.heading} name={curElem.name} description1={curElem.description1} description2={curElem.description2} description3={curElem.description3} description4={curElem.description4}/>    
                    })
                }      
            </div>       
            <Footer/>
            </div>
        </>
    )
}

export default SearchResultPage