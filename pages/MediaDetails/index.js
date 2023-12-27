
import {Component} from 'react'

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
import { render } from 'react-dom'

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

 class  MediaDetails extends Component {

    state={
        activeMediaButtonId : MediaOptionsButtons[0].id,
    }

    onClickMediaButton = (id) => {
        this.setState({
            activeMediaButtonId: id
        })
    }

    mapAndDescriptionSection = () => (
       
    <div className="flex flex-col items-center lg:flex-row lg: justify-center">
            <div className="mt-6 flex flex-col items-center px-8 justify-center">   
                <GoogleMapComponent/>
                <div className="px-10 pt-2 width-[500px]">
                    <h1 class="w-[293px] h-[23px] text-blue-950 text-xl font-semibold font-['Figtree'] my-3 lg:mt-1
                    leading-tight">Industries that suit this location:</h1>

                    <ul className="w-[500px]">
                        {industriesData.map(obj => 
                        <li key={obj.id} className="p-3 h-10 lg:h-8 m-1 rounded-[10px]
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
    )

    reviewsSection = () => <div className='px-8 w-full flex justify-center items-center h-[400px]'>
    <h1 className="text-grey font-medium text-3xl font-['figtree']" >Reviews comes here</h1>
    </div>

    policySection = () => <div className='px-8 w-full flex justify-center items-center h-[400px]'>
    <h1 className="text-grey font-medium text-3xl font-['figtree']" >Policy section comes here</h1>
    </div>

    aboutVendorSection = () => <div className='px-8 w-full flex justify-center items-center h-[400px]'>
    <h1 className="text-grey font-medium text-3xl font-['figtree']" >About vendor section comes here</h1>
    </div>



    renderMediaDetailSections = () => {
        const {activeMediaButtonId} = this.state

        switch(activeMediaButtonId) {
            case MediaOptionsButtons[0].id :
                return this.mapAndDescriptionSection()
            case MediaOptionsButtons[1].id :
                return this.reviewsSection()
            case MediaOptionsButtons[2].id :
                return this.policySection()
            case MediaOptionsButtons[3].id :
                return this.aboutVendorSection()
        }

    }

    render() {
        const {activeMediaButtonId} = this.state
    return(
        <>
        <Navbar/>

       <div>
            <div className='px-5 py-4 mb-[-10px] text-[14px] ml-8'>
                <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> 
              <span className= " mx-3 text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " >  MarketPlace &nbsp; /</span> 
              <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >Billboards</span>
            </div>
            <hr className='border border-gray-300 w-[100vw] mb-3' />
        </div>
       
    <div className=" mt-2 mx-12">
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
                 justify-center items-center inline-flex cursor-pointer`} onClick={() => this.onClickMediaButton(obj.id)} >
                    <h1 className={`text-center ${obj.id == activeMediaButtonId ? 'text-indigo-500':'text-gray-400'} text-base font-medium font-['Figtree']`}>{obj.displayText}</h1>
                </li>)}
        </ul> 
        <hr/>
    </div>
        
    {this.renderMediaDetailSections()}

    <div className="px-10 sm:mt-10 md:mt-6">
        <div className="my-10">
            <h1 className="text-slate-950 text-3xl font-bold font-['Inter']
             leading-[48px] tracking-wider mx-5">Related Items </h1>
             <PeopleAlsoLookFor/>
        </div>

        <div className="mt-4">
        <ExtraServices />
        </div>
        <ServiceSection/>
    </div>
        </>
    )
}
 }

export default MediaDetails

