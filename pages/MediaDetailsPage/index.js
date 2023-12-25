
import ExtraServices from "@/Components/ExtraServices"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import ServiceSection from "@/Components/ServicesSection"
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'
import GoogleMapComponent from './GoogleMap'

const industriesData = [
    {
        id:0,
        industryName: 'E-Commerce',
    },
    {
        id:1,
        industryName: 'Real Estate',
    },
    {
        id:2,
        industryName: 'Politics',
    },
    {
        id:3,
        industryName: 'Automobile',
    },
    {
        id:4,
        industryName: 'Educational',
    },
    {
        id:5,
        industryName: 'Technology',
    }
]

 const  MediaDetails = props => {

    return(
        <>
        <Navbar/>

        <div>
             <h1 className='px-5 py-4 mb-[-10px] text-[14px]'><span className='text-gray-400 '> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
            <hr className='border border-gray-300 w-[100vw] mb-3' />
        </div>

        <div className="flex px-10 ">
            <div>    
                <GoogleMapComponent/>
                <div>
                <h1 class="w-[293px] h-[23px] text-blue-950 text-xl font-semibold font-['Figtree'] my-3
                leading-tight">Industries that suit this location:</h1>
                <ul className="flex flex-wrap w-[410px]">
                    {industriesData.map(obj => 
                        <li key={obj.id} className="w-[120px] h-10 m-1 rounded-[10px]
                         border border-blue-950 justify-center items-center gap-[38px] inline-flex">
                            <button type="button" className="text-blue-950 text-base font-normal font-['Figtree'] 
                            leading-none">{obj.industryName}</button>
                        </li>
                    )}
                </ul>
                </div>
            </div>
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

