import React from 'react'

const OurStory = () => {
    return (
        <>
            <div className="p-6 lg:ml-10 main h-[260px] sm:h-[280px] md:h-[300px] bg-[#F9FBFD] flex justify-center items-center">
                <div className=' xl:p-7 lg:p-5 xl:w-[75%] lg:w-[85%] md:w-[90%] sm:w-[92%] w-[90%] flex sm:flex-row flex-col justify-center items-center lg:space-x-10 sm:space-y-0 space-y-7'>

                    <div className="content w-full">
                        <div className='sm:space-y-6 space-y-2 sm:text-justify text-center'>
                            <span>
                                <p className='sm:text-sm text-[10px] text-[#A9A9A9]'>OUR STORY</p>
                                <h1 className='sm:text-2xl text-xl font-semibold text-[#131C5F] font-[Playfair]'>We are agency that expert more than 10 years</h1>
                            </span>
                            <p className='text-[#777777] leading-4 sm:mt-4 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>


                    <div className="button sm:w-[50%] md:w-[80%] lg:w-full xl:w-full flex md:justify-center md:items-center sm:justify-end">
                        <button className='text-sm px-12 py-2 lg:px-16 lg:py-3 md:px-12 md:py-3 sm:px-8 sm:py-3 bg-[#F5167E] text-[#FFF] rounded-full shadow-xl shadow-[rgba(61, 55, 241, 0.25)]'>Know More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory