import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ContactUsnavbar = () => {
    return (
        <>
            <div className="navbar bg-[#0A075F]">
                <div className="Navbar py-5 flex justify-around relative">
                    <Link href="/"
                        className={"bg-[#ffffff] xs:w-[90px] sm:w-[149px] xs:h-[32px] sm:h-[37px] relative "}
                    >
                        <Image
                            className="xs: w-[80px] sm:w-[136.7px] h-8 relative" height={32} width={136.7}
                            src='/assets/mainlogo.png' alt="main logo" />
                    </Link>
                    <div className="links flex  justify-between">
                        <Link href="/Marketplace" className="xs:mr-4 sm:mx-3 text-[#d9d9d9] text-center font-['Figtree-Medium',_sans-serif] xs:text-[16px] sm:text-base leading-[101%] font-medium relative xs:w-[62px] sm:w-[129px]">Marketplace</Link>
                        <Link href="/Partner" className="xs:ml-4 sm:mx-3 text-[#d9d9d9] text-center font-['Figtree-Medium',_sans-serif] xs:text-[16px] sm:text-base leading-[101%] font-medium relativew xs:w-[118px] sm:w-[129px] ">Become a partner</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsnavbar