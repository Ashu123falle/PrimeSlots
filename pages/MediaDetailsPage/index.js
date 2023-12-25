
import ExtraServices from "@/Components/ExtraServices"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import ServiceSection from "@/Components/ServicesSection"
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'
import GoogleMapComponent from './GoogleMap'
import DetailsComponent from './detailsComponent'
import Carousel from './imageCarousal'
import laStreetView from '@/pages/assets/la_street-view.svg'
import parkOutline from '@/pages/assets/icon-park-outline_video.svg'
import Image from 'next/image'

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

const carousalImages = [
        'https://s3-alpha-sig.figma.com/img/2f7b/3a1d/8b196cd95d42f6a6443084fa742dd86c?Expires=1704672000&Signature=IAbAoeve1RS1ZpPaCdnZaJcLpSJL7ih5ZU0FYY3FcRqPxww9mHymVy~QtOqpzidKSf9bW2paGQsmYadxnzwTQ2cISSqaHn92kFzPtus6PqWPspe4tUQ1RgpPjJqgtiPbrDD5NDgAO-Bfona9ix37BH~opfothZ7jjMearhn~uYXHJdcS1~GtiFZAqx62sF0Wm9rrNKNDvnhfItsC9mbZZspaVl1LgJq13hK~NzHV1G0nL8ZZuKePbfdlooggr8G2L7T67ozJim35M7c2j5DzH-rtVztzP3V6-fb4erUVSTunyUkIb4CfpGBTR4a6lWRrDCe9PNWWpee5FiFVIJNVog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/2f7b/3a1d/8b196cd95d42f6a6443084fa742dd86c?Expires=1704672000&Signature=IAbAoeve1RS1ZpPaCdnZaJcLpSJL7ih5ZU0FYY3FcRqPxww9mHymVy~QtOqpzidKSf9bW2paGQsmYadxnzwTQ2cISSqaHn92kFzPtus6PqWPspe4tUQ1RgpPjJqgtiPbrDD5NDgAO-Bfona9ix37BH~opfothZ7jjMearhn~uYXHJdcS1~GtiFZAqx62sF0Wm9rrNKNDvnhfItsC9mbZZspaVl1LgJq13hK~NzHV1G0nL8ZZuKePbfdlooggr8G2L7T67ozJim35M7c2j5DzH-rtVztzP3V6-fb4erUVSTunyUkIb4CfpGBTR4a6lWRrDCe9PNWWpee5FiFVIJNVog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
       'https://s3-alpha-sig.figma.com/img/2f7b/3a1d/8b196cd95d42f6a6443084fa742dd86c?Expires=1704672000&Signature=IAbAoeve1RS1ZpPaCdnZaJcLpSJL7ih5ZU0FYY3FcRqPxww9mHymVy~QtOqpzidKSf9bW2paGQsmYadxnzwTQ2cISSqaHn92kFzPtus6PqWPspe4tUQ1RgpPjJqgtiPbrDD5NDgAO-Bfona9ix37BH~opfothZ7jjMearhn~uYXHJdcS1~GtiFZAqx62sF0Wm9rrNKNDvnhfItsC9mbZZspaVl1LgJq13hK~NzHV1G0nL8ZZuKePbfdlooggr8G2L7T67ozJim35M7c2j5DzH-rtVztzP3V6-fb4erUVSTunyUkIb4CfpGBTR4a6lWRrDCe9PNWWpee5FiFVIJNVog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
]

const MediaOptionsButtons = [
    {
        id: 0,
        displayText: 'Media Description',
        isActive: true,
    },
    {
        id: 1,
        displayText: 'Reviews',
        isActive: false,
    },
    {
        id: 2,
        displayText: 'Policy',
        isActive: false,
    },
    {
        id: 3,
        displayText: 'About Vendor',
        isActive: false,
    },

]

 const  MediaDetails = props => {

    return(
        <>
        <Navbar/>

        <div>
             <h1 className='px-5 py-4 mb-[-10px] text-[14px]'><span className='text-gray-400 '> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
            <hr className='border border-gray-300 w-[100vw] mb-3' />
        </div>

        <div className="px-10 mt-2">
        <Carousel images={carousalImages}/>
        <div className="flex justify-between m-3 border shadow p-4 h-14 rounded-lg">
            <h1 className="text-base font-['Figtree] ">Title of media will come here...</h1>
            <div className="flex">
                <Image src={laStreetView} alt="street view icon" className="mr-2"/>
                <Image src={parkOutline} alt="park view icon" className="ml-1"/>
            </div>
        </div>

        <ul className="flex flex-wrap justify-around w-[550px] ">
            {MediaOptionsButtons.map(obj => 
                <li key={obj.id} className={`m-2 w-[120px] h-12 pt-4 pb-[13px] border-indigo-500 ${obj.isActive ? 'border-b-2':''}
                 justify-center items-center inline-flex cursor-pointer`} >
                    <h1 className="text-center text-indigo-500 text-base font-medium font-['Figtree']">{obj.displayText}</h1>
                </li>)}
        </ul>
        <hr/>
        </div>

        <div className="flex flex-col px-14   lg:ml-10 justify-around  items-center md:flex-row mt-8 max-w-[1100px]">
            <div className="m-3 md:m-0 shadow-lg p-2">    
                <GoogleMapComponent/>
                <div>
                <h1 class="w-[293px] h-[23px] text-blue-950 text-xl font-semibold font-['Figtree'] my-3
                leading-tight">Industries that suit this location:</h1>
                <ul className="flex flex-wrap w-[410px]">
                    {industriesData.map(obj => 
                        <li key={obj.id} className="w-[120px] h-10 m-1 rounded-[10px]
                         border border-blue-950 justify-center items-center gap-[38px] inline-flex cursor-pointer">
                            <button type="button" className="text-blue-950 text-base font-normal font-['Figtree'] 
                            leading-none ">{obj.industryName}</button>
                        </li>
                    )}
                </ul>
                </div>
            </div>

            <DetailsComponent/>
        </div>
        
    <div className="px-10 sm:mt-10 md:mt-6">
        <div className="pt-2 ">
            <h1 className='text-xl md:text-2xl font-bold sm:mb-[-80px] md:mb-0'>Related Items</h1>
            <PeopleAlsoLookFor/>
        </div>
        <div className="mt-4">
        <ExtraServices />
        </div>
        <ServiceSection/>
    </div>
        <Footer/>
        </>
    )
}

export default MediaDetails

