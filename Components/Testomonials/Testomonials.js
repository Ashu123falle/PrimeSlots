import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div className="maincontainer space-y-10 md:py-10 lg:py-14 sm:space-y-14 p-5 md:flex flex-col justify-center items-center lg:px-24 xl:px-44">
                <div className='text-center space-y-2 md:px-10 lg:px-28'>
                    <h1 className='text-blue-950 text-blue-950 text-[40px] font-normal font-[Playfair]'>Testimonials</h1>
                    <p className="text-xs sm:text-[0.8rem] md:text-[0.9rem] font-[Figtree] text-neutral-500  font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="image px-12 md:px-9 lg:px-12  md:space-x-5 md:flex md:justify-center md:items-center">
                    <div className='space-y-3 sm:space-y-5'>
                        {/* one div */}
                        <div className='flex lg:h-[195px]'>
                            <Image className='xs:w-[100px] md:w-[160px]' src="https://s3-alpha-sig.figma.com/img/d18f/3ca1/c09872c27e4fb88ba1980b61a0d8dbd5?Expires=1704672000&Signature=R5aTV4mqcC9xvYkNLLhVK~wWbx0qzF4FYUwntCEgCs6-fqW2FwEVwH22wgTq5jyepqPvP0JWGelp8BbrhaIniJC2Dxkd3Mg~y8dUjtG9YBvtjf8Ij3SbDBLxxZmZaPMNF4VCQ-yNyz3ma1C~rnpXbfzeVB3d0V~fq94F0zxZET0Wf17Po0U7~hJwBmkSJGv~5sHDrm~miQyogf7iCbRS8tT-CcbQItzspZvDGwgigqIYNoVSKuxNzMRyx1krxfYJlgYD5FYMVP2MsHuPWaZip6KDgNsv05Ukl4m5lHug2qyRXxu78oGqzWV8MojZuecRSZydu2-S~GrJxFJc6saj5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width={377} height={399} />

                            <div className='p-3 bg-[#241E1F] space-y-3 flex flex-col justify-center items-center'>
                                <h1 className='text-[18px] leading-5 font-bold text-[#FFFFFF]'>“Amazing Team with Lorem Ipsum”</h1>
                                <p className='text-[11px] leading-3 text-[#FFFFFF] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                                <div className='flex space-x-3'>
                                    <p className='text-[13px] text-[#FFFFFF] font-medium'>See full review</p>
                                    <Image src='/assets/Vector6.svg' width={15} height={15} alt="vector"/>
                                </div>
                            </div>
                        </div>

                        {/* second div */}
                        <div className='flex lg:h-[195px]'>
                            <div className='p-3 bg-[#241E1F] space-y-3 flex flex-col justify-center items-center'>
                                <h1 className='text-[18px] leading-5 font-bold text-[#FFFFFF]'>“Amazing Team with Lorem Ipsum”</h1>
                                <p className='text-[11px] leading-3 text-[#FFFFFF] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                                <div className='flex space-x-3'>
                                    <p className='text-[13px] text-[#FFFFFF] font-medium'>See full review</p>
                                    <Image src='/assets/Vector6.svg' width={15} height={15} alt="vector2"/>
                                </div>
                            </div>

                            <Image className='xs:w-[100px] md:w-[160px]' src="https://s3-alpha-sig.figma.com/img/d18f/3ca1/c09872c27e4fb88ba1980b61a0d8dbd5?Expires=1704672000&Signature=R5aTV4mqcC9xvYkNLLhVK~wWbx0qzF4FYUwntCEgCs6-fqW2FwEVwH22wgTq5jyepqPvP0JWGelp8BbrhaIniJC2Dxkd3Mg~y8dUjtG9YBvtjf8Ij3SbDBLxxZmZaPMNF4VCQ-yNyz3ma1C~rnpXbfzeVB3d0V~fq94F0zxZET0Wf17Po0U7~hJwBmkSJGv~5sHDrm~miQyogf7iCbRS8tT-CcbQItzspZvDGwgigqIYNoVSKuxNzMRyx1krxfYJlgYD5FYMVP2MsHuPWaZip6KDgNsv05Ukl4m5lHug2qyRXxu78oGqzWV8MojZuecRSZydu2-S~GrJxFJc6saj5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="v" width={160}/>
                        </div>
                    </div>

                    {/* another div */}
                    <div className='flex md:flex-col mt-3 sm:mt-5 md:mt-0'>
                        <Image className='w-[196px] h-[140px] lg:h-[195px]' src="https://s3-alpha-sig.figma.com/img/d18f/3ca1/c09872c27e4fb88ba1980b61a0d8dbd5?Expires=1704672000&Signature=R5aTV4mqcC9xvYkNLLhVK~wWbx0qzF4FYUwntCEgCs6-fqW2FwEVwH22wgTq5jyepqPvP0JWGelp8BbrhaIniJC2Dxkd3Mg~y8dUjtG9YBvtjf8Ij3SbDBLxxZmZaPMNF4VCQ-yNyz3ma1C~rnpXbfzeVB3d0V~fq94F0zxZET0Wf17Po0U7~hJwBmkSJGv~5sHDrm~miQyogf7iCbRS8tT-CcbQItzspZvDGwgigqIYNoVSKuxNzMRyx1krxfYJlgYD5FYMVP2MsHuPWaZip6KDgNsv05Ukl4m5lHug2qyRXxu78oGqzWV8MojZuecRSZydu2-S~GrJxFJc6saj5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="k" width={196} height={195}/>

                        <div className='p-3 bg-[rgb(36,30,31)] space-y-3 md:space-y-2 flex flex-col md:h-[195px]  md:w-[195px] lg:h-[215px] justify-center items-center'>
                            <h1 className='text-[18px] leading-5 font-bold text-[#FFFFFF]'>“Amazing Team with Lorem Ipsum”</h1>
                            <p className='text-[11px] leading-3 text-[#FFFFFF] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                            <div className='flex space-x-3'>
                                <p className='text-[13px] text-[#FFFFFF] font-medium'>See full review</p>
                                <Image src='/assets/Vector6.svg' width={15} height={15} alt="vec"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center '>
                <button type="button" className="p-4 rounded-[38.90px] border border-stone-800 
                 text-stone-950 text-[21.78px] font-semibold font-['Figtree']">See All Reviews</button>
                 </div>

            </div>
        </>
    )
}
export default Testimonials