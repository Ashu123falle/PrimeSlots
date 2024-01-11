import React from 'react'
import Image from "next/image"
import Popup from 'reactjs-popup'
import DatePicker from '@/Components/DatePicker/DatePicker'
import {useContext} from 'react'
import {AuthContext} from '@/Context/authContext'

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
                        <Image src='/assets/Vector.svg' alt='' height={20} width={20}/>
                        <Image src='/assets/Vector.svg' alt='' height={20} width={20}/>
                        <Image src='/assets/Vector.svg' alt='' height={20} width={20}/>
                        <Image src='/assets/Vector.svg' alt='' height={20} width={20}/>
                        <Image src='/assets/Vector1.svg' alt='' height={20} width={20}/>
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
                        <Image src='/assets/ph_info.svg' alt='' height={24} width={24}/>
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
                    <div className='bg-white shadow rounded-2xl max-h-[90vh] overflow-y-auto px-9 p-6 flex flex-col justify-center items-center'>
                       
                        { isAuthorized ? (
                        <div className='flex flex-col'>
                        <div className='self-end'>
                            <button onClick={() => close()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="mingcute:close-line" clip-path="url(#clip0_1311_2066)">
                            <g id="Group">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 13.4139L17.6573 19.0709C17.8459 19.2531 18.0985 19.3539 18.3607 19.3516C18.6229 19.3493 18.8737 19.2441 19.0591 19.0587C19.2445 18.8733 19.3497 18.6225 19.352 18.3603C19.3543 18.0981 19.2535 17.8455 19.0713 17.6569L13.4143 11.9999L19.0713 6.34291C19.2535 6.1543 19.3543 5.9017 19.352 5.6395C19.3497 5.37731 19.2445 5.1265 19.0591 4.94109C18.8737 4.75568 18.6229 4.65051 18.3607 4.64823C18.0985 4.64595 17.8459 4.74675 17.6573 4.92891L12.0003 10.5859L6.34331 4.92891C6.15386 4.75125 5.90272 4.65427 5.64304 4.65849C5.38336 4.6627 5.1355 4.76779 4.95192 4.9515C4.76834 5.13521 4.66343 5.38314 4.6594 5.64283C4.65537 5.90251 4.75252 6.15358 4.93031 6.34291L10.5863 11.9999L4.92931 17.6569C4.8338 17.7492 4.75762 17.8595 4.70521 17.9815C4.6528 18.1035 4.62522 18.2347 4.62406 18.3675C4.62291 18.5003 4.64821 18.632 4.69849 18.7549C4.74877 18.8778 4.82302 18.9894 4.91692 19.0833C5.01081 19.1772 5.12246 19.2514 5.24536 19.3017C5.36825 19.352 5.49993 19.3773 5.63271 19.3762C5.76549 19.375 5.89671 19.3474 6.01872 19.295C6.14072 19.2426 6.25106 19.1664 6.34331 19.0709L12.0003 13.4139Z" fill="#224757"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_1311_2066">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </button>
                        </div>

                            <div className="cont-1 "> 
                            <h1 className="text-neutral-900 text-xl font-semibold font-['Figtree'] leading-tight">
                                Booking Details
                            </h1>
                            <p className="mt-1 text-stone-600 text-base font-normal font-['Figtree'] leading-normal">Add details to complete your booking.</p>
                            <div className="calender my-4">
                                <p className="text-[#242323] text-left font-[Figtree] text-sm font-semibold relative">Booking Duration</p>
                                <DatePicker />
                            </div>
                            <div className="bookingfor my-5">
                            <p className="text-[#242323] text-left font-[Figtree] text-sm mb-2 font-semibold relative">Booking For</p>
                            <div className="flex items-center max-w-[292px]">
                            <input 
                                placeholder="Sahil Nexocide pvt.ltd(Profile Name)"
                                type="text"
                                className="p-2 text-[15px] focus:outline-none bg-[#DDE5EE] h-[40px] w-[290px] "
                            />
                            </div>
                            </div>
                            </div>   
    
                        <div className="cont-2 my-5">
                            <h1 className="text-[#242323] text-left font-[Figtree] text-sm font-semibold mb-1 relative ">Uploaded Media</h1>
                            <div className="media flex justify-center items-center p-4 rounded-lg bg-[#EBF0F6] w-[206px] h-[51px]">
    
                                <div>
                                    <svg
                                    className={"w-6 h-6 relative overflow-visible "}
                                    style={{}}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14 22H10C6.229 22 4.343 22 3.172 20.828C2 19.657 2 17.771 2 14V10C2 6.229 2 4.343 3.172 3.172C4.343 2 6.239 2 10.03 2C10.636 2 11.121 2 11.53 2.017C11.517 2.097 11.51 2.178 11.51 2.261L11.5 5.095C11.5 6.192 11.5 7.162 11.605 7.943C11.719 8.79 11.98 9.637 12.672 10.329C13.362 11.019 14.21 11.281 15.057 11.395C15.838 11.5 16.808 11.5 17.905 11.5H21.957C22 12.034 22 12.69 22 13.563V14C22 17.771 22 19.657 20.828 20.828C19.657 22 17.771 22 14 22Z"
                                        fill="#131C5F"
                                    />
                                    <path
                                        d="M19.352 7.61699L15.392 4.05399C14.265 3.03899 13.702 2.53099 13.009 2.26599L13 4.99999C13 7.35699 13 8.53599 13.732 9.26799C14.464 9.99999 15.643 9.99999 18 9.99999H21.58C21.218 9.29599 20.568 8.71199 19.352 7.61699Z"
                                        fill="#131C5F"
                                    />
                                    </svg>
                                </div>
                                <h1 className="mx-2 text-button-primary text-center font-['Figtree-Regular',_sans-serif] text-xs leading-[14px] 
                                font-normal relative flex items-center justify-center" style={{ textDecoration: "underline" }}>Upload Media</h1>
    
                            </div>
                            <h1 className="text-secondarytext text-left mt-1 font-[Figtree]  text-[14px] font-normal relative ">
                                File size to be not more than 25MB
                            </h1>
                        </div>

                        <button onClick={login} className='bg-[#6979F8] w-full text-1xl rounded-md text-white  py-2 w-[100px]'>Book Now</button>
                        </div>
                        ): <p>Login</p>}
                        </div>
                   )}
                    </Popup>

                    <span className='flex justify-center items-center rounded-md border border-gray-400 px-4'>
                        <Image src='/assets/Wishlist2.svg' alt='' className='' height={30} width={30}/>
                    </span>
                </div>
            </div>
        </>
    )
}

export default DetailsComponent