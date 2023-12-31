import React from 'react'

const StayLoop = () => {
    return (
        <>
            <div className="main h-[160px] sm:h-[160px] md:h-[180px]  bg-gradient-to-b from-[#241E1F] to-[#0A075F]  flex justify-center items-center ">
                <div className='xl:p-7 lg:p-5 xl:w-[75%] lg:w-[85%] md:w-[90%] sm:w-[92%] w-[90%] flex sm:flex-row flex-col justify-center items-center lg:space-x-10 sm:space-y-0 space-y-7'>

                    <div className="content w-full">
                        <div className='sm:space-y-5 space-y-2 sm:text-justify text-center'>
                            <span>
                                <h1 className='sm:text-2xl text-xl font-semibold text-[#F6F6F7]'>Stay in the loop</h1>
                            </span>
                            <p className='text-[#F5F5F6] leading-4 sm:mt-4 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem]'>Join our mailing list to stay in the loop <br />with our newest for Event and Offers.</p>
                        </div>
                    </div>


                    <div className="button sm:w-[50%] md:w-[80%] lg:w-full xl:w-full flex md:justify-center md:items-center sm:justify-end">
                        <button className='text-sm px-12 py-2 lg:px-16 lg:py-3 md:px-12 md:py-3 sm:px-8 sm:py-3 bg-[#F5167E] text-[#FFF] rounded-full shadow-lg shadow-[rgba(61, 55, 241, 0.25)]'>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StayLoop