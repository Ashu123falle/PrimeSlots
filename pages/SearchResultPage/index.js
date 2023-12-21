import Footer from '@/Components/Footer'
import BlogCard from '@/Components/blogCard'
import React from 'react'

const SearchResultPage = () => {
    return (
        <>
            <div className='my-5'>
                <div>
                    <h1>Home/MarketPlace/Billboards</h1>
                    <hr />
                    <h2 className='text-right'>Showing 1-20 out of 2356 Products</h2>
                </div>
                <BlogCard/>
                <Footer/>
            </div>
        </>
    )
}

export default SearchResultPage