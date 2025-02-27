import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player'

const OurAdvantage = () => {
    return (
        <>
            <div className=" px-10 grid grid-flow-row main bg-gradient-to-t from-violet-100 via-violet-100 to-white sm:px-8 md:px-14 lg:px-24 xl:px-40  py-10 sm:space-y-2 md:space-y-6">

             {/* <div className=' flex  '>
             <div className='w-[100%] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] 3xl:h-[550px] 4xl:h-[600px]  flex justify-center items-center rounded-xl'>
                    <ReactPlayer url="https://www.youtube.com/watch?v=NwZ1v5xNmrs" controls height={'93%'} width={'93%'} className="rounded-xl"/>
                </div>

                
               
             </div>
               */}

<div className='flex overflow-x-auto space-x-4'>
      <div className='w-[100%] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] 3xl:h-[550px] 4xl:h-[600px] flex-shrink-0 rounded-xl p-2'>
        {/* First Video */}
        <ReactPlayer url="https://www.youtube.com/watch?v=NwZ1v5xNmrs" controls height={'100%'} width={'100%'} className="rounded-xl" />
      </div>
      <div className='w-[100%] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] 3xl:h-[550px] 4xl:h-[600px] flex-shrink-0 rounded-xl'>
        {/* Second Video */}
        <ReactPlayer url="https://www.youtube.com/watch?v=6g-_Ma2ro9c" controls height={'100%'} width={'100%'} className="rounded-xl" />
      </div>
    </div>


                {/* content  */}
                <div className=" px-4">
                    <div className='mt-6 sm:mt-7'>
                        <span className="text-[#242565] text-xl sm:text-3xl md:text-4xl font-bold font-['Playfair']">our</span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl text-[#242565] font-['Playfair'] font-bold ">advantages</h1>
                    </div>


                    <div className='mt-5 py-3 grid sm:grid-cols-2 sm:mt-10 sm:gap-y-20 gap-y-12 sm:py-5 2xl:ml-48'>
                        <div className='flex items-center space-x-4  text-[#131C5F] pl-5'>
                            <Image width={40} height={40} src='/assets/photoFill.svg' alt="photofill" className=' text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] text-[1.2rem] font-bold font-['Playfair']">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5'>
                            <Image width={40} height={40} src='/assets/photoFill.svg' alt="photofill" className=' text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] text-[1.2rem] font-['Playfair'] font-bold">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5 '>
                            <Image width={40} height={40} src='/assets/photoFill.svg' alt="photofill" className=' text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] font-['Playfair'] text-[1.2rem] font-bold">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5 '>
                            <Image width={40} height={40} src='/assets/photoFill.svg' alt="photofill" className=' text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] font-['Playfair'] text-[1.2rem] font-bold">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurAdvantage