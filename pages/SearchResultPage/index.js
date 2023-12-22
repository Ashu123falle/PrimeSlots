import React, { useState } from 'react'
import Footer from '@/Components/Footer'
import BlogCard from '@/Components/blogCard'
import Searchapi from '../api/SearchPageapi'
import OtherSearchapi from '../api/OtherSearchapi'

const SearchResultPage = () => {

    const [searchData, setsearchData] = useState(Searchapi);

    const [othersearchData, setothersearchData] = useState(OtherSearchapi)

    return (
        <>
            <div className='px-28'>
                <div className=''>
                    <div className=''>
                        <h1 className=' py-4'><span className='text-gray-400'> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
                        <hr className='border border-gray-300' />
                        <h2 className='text-right py-3 '><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
                    </div>

                    <div className='grid grid-cols-[1fr,1fr,1fr,1fr]'>
                        {
                            searchData.map((curElem, ind) => {
                                return <BlogCard key={ind} id={curElem.id} image={curElem.image} heading={curElem.heading} name={curElem.name} description1={curElem.description1} description2={curElem.description2} description3={curElem.description3} description4={curElem.description4} />
                            })
                        }
                    </div>
                </div>
            </div>

            <hr className='border border-gray-300 my-10' />

            <div className="othersearch pl-32">
                <div className=''>
                    <h1 className='text-3xl font-bold  py-4'>People also looked for</h1>
                    <div className="img flex justify-start space-x-12">
                        {
                            othersearchData.map((curElem, ind) => {
                                return <BlogCard key={ind} id={curElem.id} image={curElem.image} heading={curElem.heading} name={curElem.name} description1={curElem.description1} description2={curElem.description2} description3={curElem.description3} description4={curElem.description4} />
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SearchResultPage