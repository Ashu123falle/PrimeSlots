import Image from "next/image"

const MyBookings = () => {
    return (
    <div className="w-full  flex flex-col md:flex-row justify-start items-start m-1 lg:m-10 sm:m-3 mb-5 mt-5 md:mb-20">
        <div className="w-full lg:w-1/2 flex flex-row mt-2">
            <Image src='/assets/myBookingsImage.jpg' height={80} width={100}   alt="light" />
            <div className="ml-2 sm:ml-5 md:ml-3 ">
                <h1 className="text-zinc-900 text-sm lg:text-xl font-medium font-['Inter'] leading-snug">Title of the media will come here...</h1>
                <p className="text-gray-400 text-xs lg:text-base font-normal font-['Inter'] leading-normal">Booked from : 28th Jan,2023 - 28th Feb,2023</p>
                <p className="text-zinc-800 mt-2 mb-2 text-sm font-normal font-['Figtree'] underline leading-tight">#125468</p>
                <div>
                    <button type="button" className="text-red-500 mr-2 md:mr-5 text-[12px] font-medium font-['Inter'] rounded-md border border-zinc-200 p-1">Cancel Bokking</button>
                    <button type="button" className="text-blue-600 mr-1  md:mr-5 text-[12px] font-medium font-['Inter'] rounded-md border border-zinc-200 p-1">Cancel Bokking</button>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-[37.5%] mt-5 md:mt-0 flex flex-row justify-between items-start">
            <div>
                <h1 className="text-zinc-900 text-base font-medium font-['Inter'] leading-snug lg:text-lg">Deliver by Oct 30, 2023</h1>
                <p className="text-gray-400 text-xs lg:text-base font-normal font-['Inter'] leading-normal">Ordered Oct 25, 2023</p>
                <div className="flex flex-row justify-start items-center">
                    <div className="w-[30px] h-[30px] bg-zinc-300 rounded-full flex flex-row justify-center items-center mr-2 md:mr-5">
                        <div className="w-[25px] h-[25px] bg-[#131C5F] rounded-full flex justify-center items-center">
                            <Image src='/assets/icondelivery.png' width={20} height={20} alt=""/>
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs font-normal font-['Inter'] leading-normal">Paid for Express delivery</p>  
                </div>
            </div>
            <h1 className="text-zinc-900 mr-5 lg:mr-0 lg:ml-5 text-base font-medium font-['Inter'] leading-snug lg:text-xl">₹1,50,000</h1>
        </div>

    </div>)
}

export default MyBookings