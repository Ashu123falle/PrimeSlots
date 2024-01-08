import React from 'react'
import Image from "next/image"
import staricon from '@/pages/assets/Vector.svg'
import blankicon from '@/pages/assets/Vector1.svg'
import wishlist from '@/pages/assets/Wishlist2.svg'
import info from '@/pages/assets/ph_info.svg'
import Popup from 'reactjs-popup'
import {useContext} from 'react'
import AuthContext from '@/Context/authContext'

const DetailsComponent = () => {
    const {jwtToken,isAuthorized,onClickLogin} = useContext(AuthContext)

    const login = () => {
        onClickLogin()
    }
    

    return (
        <>
            <div className="main w-[350px] sm:w-[550px] md:w-[500px] px-5 ml-5 sm:ml-0 sm:px-10 lg:h-[480px] mt-8 space-y-2 sm:space-y-4 md:px-6">
           
                {/* one */}
                <div className='iconheading flex space-x-2 sm:space-x-4'>
                    <span className="icon flex sm:space-x-1 sm:mr-6 md:mr-0">
                        <Image src={staricon} alt='' />
                        <Image src={staricon} alt='' />
                        <Image src={staricon} alt='' />
                        <Image src={staricon} alt='' />
                        <Image src={blankicon} alt='' />
                    </span>
                    <div className='flex space-x-4 sm:space-x-5'>
                        <p className='bg-gray-100 text-orange-600 rounded-xl p-1 sm:p-2 text-xs sm:text-base'>Physical Boarding</p>
                        <span className="text-orange-600">|</span>
                        <p className='bg-gray-100 text-orange-600 rounded-xl p-1 sm:p-2 text-xs sm:text-base'>Billboard</p>
                    </div>
                </div>

                {/* two */}
                <div className="pricedimension flex items-center justify-between">
                    <p className='text-2xl'>₹19200.00</p>
                    <p>Dimensions: <span className='font-semibold'>11 x 6 Feet</span></p>
                </div>

                {/* three */}
                <div>
                    <p className=" font-['Figtree']" >Start with a brief overview that describes your media’s finest features. Advertisers will only see the first few lines of your description at first, so make it count!</p>
                </div>

                <hr />

                {/* four */}
                <div className='border border-stone-300 border-opacity-50 py-2 space-y-2 lg:space-y-4 lg:mt-2'>
                    <div className='flex items-center px-5 space-x-12'>
                        <h1 className='text-4xl font-bold text-[#629E69]'>7.8</h1>
                        <div className='space-y-1'>
                            <p className='font-semibold'>Walk Score</p>
                            <p className='text-gray-800'>Walk Score is more than average</p>
                        </div>
                        <Image src={info} alt='' />
                    </div>

                    <hr />

                    <div className='flex items-center px-5 space-x-5'>
                        <h1 className="w-[95px] text-center text-slate-700 text-4xl font-semibold font-['Figtree'] leading-normal tracking-wide" >12 hr</h1>
                        <div className='space-y-1'>
                            <p className='font-semibold'>Processing Time</p>
                            <p className='text-gray-800'>This is an estimation, may be delivered early.</p>
                        </div>
                    </div>
                </div>

                {/* fifth */}
                <div className='flex space-x-2'>
                    <Popup trigger={
                    <button className='bg-[#6979F8] text-1xl rounded-md text-white w-full py-2'>
                         Book Now
                     </button>
                    }
                    modal
                    >
                   {close => (
                    <div className='w-[80vw] h-[70vh] bg-[#2d2d2d] rounded-2xl p-3 flex flex-col justify-center items-center'>
                        <button onClick={login} className='bg-[#6979F8] text-1xl rounded-md text-white  py-2 w-[100px]'>Login</button>
                        { isAuthorized ? <p className="text-white text-2xl mt-9">Current user is authorized !!</p>:<p className="mt-9 text-white text-2xl">User is not authorized</p> }
                    </div>
                   )}
                    </Popup>
                    <span className='flex justify-center items-center rounded-md border border-gray-400 px-4'>
                        <Image src={wishlist} alt='' className='' />
                    </span>
                </div>
            </div>
        </>
    )
}

export default DetailsComponent