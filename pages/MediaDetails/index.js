
import {useState} from 'react'
import { useRouter } from 'next/router'
import ExtraServices from "./ExtraServices"
import Navbar from "@/Components/Navbar"
import ServiceSection from "@/Components/ServicesSection"
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'
import GoogleMapComponent from './GoogleMap'
import DetailsComponent from './detailsComponent'
import Carousel from './imageCarousal'
import laStreetView from '@/pages/assets/la_street-view.svg'
import parkOutline from '@/pages/assets/icon-park-outline_video.svg'
import Image from 'next/image'
import TickImage from '@/pages/assets/icons8-tick.svg'

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
    },
    {
        id: 1,
        displayText: 'Reviews',
    },
    {
        id: 2,
        displayText: 'Policy',
    },
    {
        id: 3,
        displayText: 'About Vendor',
    },

]

 const MediaDetails = () => {

    const [activeMediaButtonId,setActiveMediaButtonId] = useState(MediaOptionsButtons[0].id)
    const [activeIndustryId,setActiveIndustryId] = useState([])

    const onClickMediaButton = (id) => {
        setActiveMediaButtonId(id)
    }

    const onClickIndustryButton = (id) => {
        if (activeIndustryId.includes(id)) {
            const updatedIndustriesArray = activeIndustryId.filter(obj => obj != id)
            setActiveIndustryId(updatedIndustriesArray)
        } else {
        setActiveIndustryId(prevState => [...prevState,id])
        }
    }

    const router = useRouter();
    const { category } = router.query;
    const { pathname } = router;
    const [,pageName] = pathname.split("/")

    const mapAndDescriptionSection = () => (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center px-10">
            <div className="mt-6 flex flex-col items-center px-8  justify-center">   
                <GoogleMapComponent/>

                <div className="p-3 w-[300px] sm:w-[500px] lg:w-[450px]">
                    <h1 class="w-[293px] h-[23px] text-blue-950 text-base sm:text-xl font-semibold font-['Figtree'] my-3 lg:mt-1
                    leading-tight">Industries that suit this location:</h1>

                    <ul>
                        {industriesData.map(obj => 
                        <li key={obj.id} className={`p-3 h-8 lg:h-8 md:h-10 m-1 rounded-[10px]  flex 
                        border border-blue-950 justify-around items-center gap-[38px] inline-flex cursor-pointer 
                        ${activeIndustryId.includes(obj.id) ? 'bg-blue-950 text-white ':''}`} onClick={() => onClickIndustryButton(obj.id)}>
                            <button type="button" className={`text-blue-950 text-sm  font-normal font-['Figtree'] 
                                leading-none  ${activeIndustryId.includes(obj.id) ? 'bg-blue-950 text-white mr-[-22px] ':''} `}>{obj.industryName}
                            </button>
                            {activeIndustryId.includes(obj.id) && <Image src={TickImage} className="text-xs"/>}
                            
                        </li>
                        )}
                    </ul> 

                </div>
            </div>
            <DetailsComponent/>
        </div>
    )

    const reviewsSection = () => <div className='px-8 w-full flex justify-center items-center h-[400px]'>
    <h1 className="text-grey font-medium text-3xl font-['figtree']" >Reviews comes here</h1>
    </div>

    const policySection = () => <div className='px-8 w-full flex justify-center items-center h-[400px]'>
    <h1 className="text-grey font-medium text-3xl font-['figtree']" >Policy section comes here</h1>
    </div>

    const aboutVendorSection = () => <div className='px-8 w-full flex justify-center items-center h-[400px]'>
    <h1 className="text-grey font-medium text-3xl font-['figtree']" >About vendor section comes here</h1>
    </div>

    const renderMediaDetailSections = () => {
        switch(activeMediaButtonId) {
            case MediaOptionsButtons[0].id :
                return mapAndDescriptionSection()
            case MediaOptionsButtons[1].id :
                return reviewsSection()
            case MediaOptionsButtons[2].id :
                return policySection()
            case MediaOptionsButtons[3].id :
                return aboutVendorSection()
        }
    }

        
    return(
        <>
        <Navbar/>

       <div>
            <div className='px-5 py-4 mb-[-10px] text-[14px] ml-8'>
                <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> 
              <span className= " mx-3 text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " >  {pageName} &nbsp; /</span> 
              <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >Billboards</span>
            </div>
            <hr className='border border-gray-300 w-[100vw] mb-3' />
        </div>
       
    <div className="mt-6 mx-12">
        <Carousel images={carousalImages}/>

        <div className="flex justify-between  border shadow p-4 h-14 rounded-lg">
            <h1 className=" text-black text-base font-medium font-['Figtree'] leading-tight">Title of media will come here...</h1>
            <div className="flex">
                <button className="border-none outine-none" type="button">
                <Image src={laStreetView} alt="street view icon" className="mr-2"/>
                </button>
                <button>
                <Image src={parkOutline} alt="park view icon" className="ml-1"/>
                </button>
            </div>
        </div>

         <ul className="flex flex-wrap justify-around  md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]">
            {MediaOptionsButtons.map(obj => 
                <li key={obj.id} className={`m-2  h-12 pt-2 pb-[13px] border-indigo-500 ${obj.id == activeMediaButtonId ? 'border-b-2':''}
                 justify-center items-center inline-flex cursor-pointer`} onClick={() => onClickMediaButton(obj.id)} >
                    <h1 className={`text-center ${obj.id == activeMediaButtonId ? 'text-indigo-500':'text-gray-400'} text-base font-medium font-['Figtree']`}>{obj.displayText}</h1>
                </li>)}
        </ul> 
        <hr/>
    </div>
        
    {renderMediaDetailSections()}

   
        <div className="my-10 sm:mt-10 md:mt-6 ml-6 ">
            <h1 className="text-slate-950 text-3xl font-bold font-['Inter']
             leading-[48px] tracking-wider mb-1 ml-6">Related Items </h1>
             <PeopleAlsoLookFor/>
        </div>

        <div className="mt-4 px-10">
        <ExtraServices />
        </div>
        <div className='mt-6 px-8'>
        <ServiceSection/>
        </div>
    
    </>
    )
}


export default MediaDetails

