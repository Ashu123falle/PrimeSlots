import Image from 'next/image'
import React from 'react'

const OurTeams = () => {
    return (
        <>
            <div className="main  p-10 sm:py-5 sm:p-0">
                <div className='sm:px-16 md:px-20 lg:px-20 xl:px-36 space-y-14'>
                    <div className="content space-y-2">
                        <span className='text-sm text-[#A9A9A9] font-[Figtree]'>OUR TEAMS</span>
                        <h2 className='text-2xl sm:text-3xl font-semibold text-[#131C5F] font-[Playfair]'>Meet our team of marketing geniuses !</h2>
                        <p className='text-sm text-[#777777]  font-[Figtree]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>

                    <div className="images flex flex-wrap sm:flex-wrap md:flex-nowrap justify-center sm:gap-6 gap-8">
                        <div className='space-y-5'>
                            <Image src='/assets/Rectangle31 1.png' alt='image1' width={350}  height={350}/>
                            <div className='text-center'>
                                <h3 className='text-xl font-semibold text-[#131C5F]  font-[Figtree]'>Roy Thomas</h3>
                                <p className='text-sm text-[#131C5F]  font-[Figtree]'>Founder & CEO</p>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <Image src='/assets/Rectangle26.png' alt='image2' width={350} height={350}/>
                            <div className='text-center'>
                                <h3 className='text-xl font-semibold text-[#131C5F]  font-[Figtree]'>Roy Thomas</h3>
                                <p className='text-sm text-[#131C5F]  font-[Figtree]'>Founder & CEO</p>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <Image src='/assets/Rectangle28.png' alt='image3' width={350} height={350}/>
                            <div className='text-center'>
                                <h3 className='text-xl font-semibold text-[#131C5F] font-[Figtree]'>Roy Thomas</h3>
                                <p className='text-sm text-[#131C5F] font-[Figtree]'>Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeams