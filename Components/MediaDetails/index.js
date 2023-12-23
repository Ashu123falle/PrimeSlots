import React from 'react'
import Image from "next/image"
import staricon from '@/pages/assets/Vector.svg'
import blankicon from '@/pages/assets/Vector1.svg'
import wishlist from '@/pages/assets/Wishlist2.svg'
import info from '@/pages/assets/ph_info.svg'

const MediaDetails = () => {
    return (
        <>
            <div className="main w-[500px] space-y-6 mx-64 mt-16">

                {/* one */}
                <div className='iconheading flex space-x-4'>
                    <span className="icon flex space-x-1">
                        <Image src={staricon} />
                        <Image src={staricon} />
                        <Image src={staricon} />
                        <Image src={staricon} />
                        <Image src={blankicon} />
                    </span>
                    <div className='flex space-x-5'>
                        <p className='bg-gray-100 text-orange-600 rounded-xl px-2 py-0'>Physical Boarding</p>
                        <span>|</span>
                        <p className='bg-gray-100 text-orange-600 rounded-xl px-2 py-0'>Billboard</p>
                    </div>
                </div>

                {/* two */}
                <div className="pricedimension flex items-center justify-between">
                    <p className='text-3xl'>₹19200.00</p>
                    <p>Dimensions: <span className='font-semibold'>11 x 6 Feet</span></p>
                </div>

                {/* three */}
                <div>
                    <p>Start with a brief overview that describes your media’s finest features. Advertisers will only see the first few lines of your description at first, so make it count!</p>
                </div>

                <hr />

                {/* four */}
                <div className='border border-gray-400 py-4 space-y-4'>
                    <div className='flex items-center px-5 space-x-12'>
                        <h1 className='text-4xl font-bold text-purple-600'>7.8</h1>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Walk Score</p>
                            <p className='text-gray-800'>Walk Score is more than average</p>
                        </div>
                        <Image src={info} />
                    </div>

                    <hr />

                    <div className='flex items-center px-5 space-x-5'>
                        <h1 className='text-4xl font-bold text-purple-600'>12 hr</h1>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Processing Time</p>
                            <p className='text-gray-800'>This is an estimation, may be delivered early.</p>
                        </div>
                    </div>
                </div>

                {/* fifth */}
                <div className='flex space-x-2'>
                    <button className='bg-[#6979F8] text-1xl rounded-md text-white px-44 py-4'>
                        Book Now
                    </button>
                    <span className='flex justify-center items-center rounded-md border border-gray-400 px-4'>
                        <Image src={wishlist} className='' />
                    </span>
                </div>
            </div>
        </>
    )
}

export default MediaDetails