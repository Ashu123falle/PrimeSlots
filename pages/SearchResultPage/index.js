import React, { useState } from 'react'
import Footer from '@/Components/Footer'
import BlogCard from '@/Components/blogCard'
import Searchapi from '../api/SearchPageapi'

const SearchResultPage = () => {

    const [searchData, setsearchData] = useState(Searchapi);

    return (
        <>
            <div className='my-5'>
                <div>
                    <h1 className='py-4 px-40'><span className='text-gray-400'> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
                    <hr className='bg-black' />
                    <h2 className='text-right py-3 pr-52'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
                </div>
                <BlogCard searchData = {searchData}/>        
                <Footer/>
            </div>
        </>
    )
}

export default SearchResultPage