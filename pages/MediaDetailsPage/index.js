import ExtraServices from "@/Components/ExtraServices"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import ServiceSection from "@/Components/ServicesSection"
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'

 const  MediaDetails = props => {

    return(
        <>
        <Navbar/>


        <div>
             <h1 className='px-5 py-4 mb-[-10px] text-[14px]'><span className='text-gray-400 '> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
            <hr className='border border-gray-300 w-[100vw] mb-3' />
        </div>
    <div className="px-10">
        <div className="pt-2 ">
            <h1 className='text-xl md:text-2xl font-bold mb-5'>Related Items</h1>
            <PeopleAlsoLookFor/>
        </div>
        <div className="mt-6">
        <ExtraServices />
        </div>
        <ServiceSection/>
    </div>
        <Footer/>
        </>
    )
}

export default MediaDetails