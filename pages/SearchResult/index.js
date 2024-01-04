import {Component} from 'react'
import { withRouter } from 'next/router';
import Link from 'next/link';

import Footer from '@/Components/Footer/Footer'
import BlogCard from '@/Components/blogCard/blogCard'
import Navbar from '@/Components/Navbar/Navbar'
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor/PeopleAlsoLookFor'
import ServiceSection from '@/Components/ServicesSection/ServicesSection'

const Searchapi = [
    {
        id:1,
        image:"https://s3-alpha-sig.figma.com/img/d0d6/fb64/ac317a81274e933ab56953f482e79f71?Expires=1704067200&Signature=NcZuFsVC3GSR~Zxevtq9KAcjJzChWDcJ50X41THeKTWdaq4UFub4BkdyUYx7nkG091JDN7Y~g33kun6egvsTVom8RMW5xFrUkAm1KRZfGmZ0U~uQ2jh4iAFQlV4kML1Yg~r4JUfm1kPegKkhWSEt66EJiGRegCswZlt82x8kUqI9Kci6BwApuJo-jfqrPNOlEBXOYYcDapuNKv-~d7YVTxUP5aYlCF5fQg0D0YltKKCDzBsQuq5YoLvqyqK8fY236VJNCnA66LmLV7i79Z2Q23WW9y1M28QQCIiryc9L8Fz65K5zfWtujNXfs4j5ANuXIqZ0fDvrRze8EpIbvm0npQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: true,
    },
  
    {
        id:2,
        image:"https://s3-alpha-sig.figma.com/img/7bd9/2916/de73d8dd53e61c76a26828ace17fe898?Expires=1704067200&Signature=FY1hirxIunWFJBOFRkF80B1a4q9TDPtV7C4q~OIoRh6efEGp8xVFwlU9t24-JuuW-zEhhnX~vFt0iUSWaYsOHyjiJi5eeeHJwKn-VLXF0kmdue10B6I7hRSvUO8JpznNea~qYDbL-AhHI4XcRUw6gnEpoTri9Fs1Zhe0hYVbA2txukNm~vut6-pTonPBYOopeWLERo9NiZE26Dyc7aWlcr28tvWUixDT4h4o5oajNnzayv0I5FUhaU0DWQ62rmiwLfpUO8I3YgvRDCaSQKM8QOVTAc0ewXjgC0Kbegbq9~yk4n2vwkIY8BahbNHAbvTtfpOyCnembaqW9B2joOfbjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: false,
    },
  
    {
        id:3,
        image:"https://s3-alpha-sig.figma.com/img/fc88/6f74/41628076516333f1052602929b7d989f?Expires=1704067200&Signature=JNl02bcPxMiS8rwhkogE8TN~H-rFtSyfT-3cJNGQHDk631u13jCG-UM1IdHI7CcdObKKFFlIPbGm3PH6fYrcc-9R2opv7uO0lpuQlyDduprSEPNpO8-Y2v6KqDHdpnyU3mJTTE267lKJQAOXHdVfetSPmkiGBDAvFoVc9Q9QmRuBxhATl-U7tw2KjFNdZZW9gGcXY-sb1IT4CqQXsW3Iyv29-pHcQKFcBgw7iz6OocIlKYfiHsW92pP-34v1boqnFLkXYs9oAkREYiOw9tmOn7V6u1HceC01T95TqX2RzvXH24UbElITxVOyyk7CKaawckl4O5hp7vPqhIMy0MfXtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: false,
    },
  
    {
        id:4,
        image:"https://s3-alpha-sig.figma.com/img/d477/0221/15c438b7930694c75ebe70148ed817d7?Expires=1704067200&Signature=RCk4i7nL2vGps9VNpY04pkBZvuRmzfgLvJfLvR0AgaXzeWKgoUy-Jp7zOfUioL2tbSwNF7FyCbRmBiGX9l7FaYDjIJaqY4agAANI2a0gTgUdzaWroCGpnqcvjD9CZNGUtCYWEKjeE9GZvlHC5TzSNdq83CLOZkuuzZ0N3bF3MqV~xtTKFPm-FcvGqrchfOYpkszq3Iojo8syRp6gNLbZ~w2mKlGDye6lbDc4~~8sQpPWpe5nVYGLH8g0MP3Bjl1qE9psO~Z0xOjppAej4muAASVEk3CUSFBoytpeUxqgPtI6oGrlVQCQ8is5eBPAI5rkz1aLkN-yWgeFF9MUV7l~LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: false,
    },
  
    {
        id:5,
        image:"https://s3-alpha-sig.figma.com/img/059c/68db/bb534e560011ffa2aa844e470c4903e2?Expires=1704067200&Signature=WbME2o00scLkHgZinLX3yeveVpR30lzijsKFs2T9KfXSjP--bj5HERQRw5ov~qWtuO05hqqW5mtLZCMJiayIdUXTrQjUSAZ62JLHqeUTis9J~irmPF5X7AA4cQgtc8N0F~v5uTc54NpYRlY8E6ZcdW0WdKPdsHasqW7bRqk~dJCQbMfWVyP17a3O-eXjp-L6YFG7ad3xmDqxsRvMGtmyMCzUlEkRM9Qr3TIHb40lu-Jlw7dp3qfiGLJUWryqI7JgBuIXsu1ozqs3TBEO1qqD6MKRmPUJg2DmlfD8ySL4B3FMod~qY4mPSnbncz4gST~deeavSesz2Af7HGE5rfbfhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: false,
    },
  
    {
        id:6,
        image:"https://s3-alpha-sig.figma.com/img/98e7/9a7b/31f42c9cad23e7c5c35c314c41b9ca30?Expires=1704067200&Signature=S1FIESSK-0GwMKpnvjK8AOBLHvOiotJnWPozdlxaZ0HkzkLC-v7C~2t4qWy9FIxtQLdwRHxsJHVqI2~8cZr0LTk72bKt9Blafb5~FNWOxdTq59Tpw2nWM1SKl2ZQKW5oxnEMhDqg8uPkXQI8jz~f62kJUUuscOBhyaaszxXQpmpr573qZp7T6KuqDVzo0GF69zcdUWefpbr6scAEAmbhn6FcfGDmm0cyBwhRPECa01fB0IULsBLYp76wMS7Cdibfq9XeuH-p4SCafSYNxpY2QLEvUaod30IzcezYNDJzmCOSd-9TNRp8aQGTeYHKk2DV1N7jNOgk9kKIYZKSc~9cVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: false,
    },
  
    {
        id:7,
        image:"https://s3-alpha-sig.figma.com/img/c784/8fd5/3ecd6740f48a20e609a7792230acb580?Expires=1704067200&Signature=ZvYRfoy3hPU2a59TSH2iFjo-kBN8IHARBMVPEaLyC3syk1O~DvG8hvP9ugVanb8Mx3alEylfN5mt0xd5v6P3xCfu65-VfEraHn053AO5mo4vSrfcTDhe7rvWYwVFZtTYHiysvgICs3lzOXLWZXyKt63NJDFIwxS5PEU6dxFJM0IZgB~ASkE4a2h9KNynI~k42elYOXGzr1VWioNu~iN3hcZKvSM6IECCg3QDSw0WaRtfj059bhGwmHzGzN6n2mompztaJC8atoEHaBePn4havDBmHdf78L~WtUblHqiISDLkb8nPip0iCvQAodOkClb3Os-lnNltX48P2QXYLlc-ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: false,
    },
  
    {
        id:8,
        image:"https://s3-alpha-sig.figma.com/img/1b91/1498/f3fedd18e5d64b09ccc1c823085633e5?Expires=1704067200&Signature=VSQJVdbyxMafJpxk3v0qV4~a2vh99ZrSOJRr8TxfRacr9UWK675UysTW~0CC4Z96nOUzVSlQnPUqDIypEpbiXEnucELMqUsAjKdlVqnfDvp8MYP-Fj5e~jXUHxsc~zTlcsdn0pjy-PzGYkECQmg0rhmTzaWh-23IOR7O~ZaRBE15lzGTdkVPnBwlZKzQOSf8vKFE3GykyqU-pA9B02DuQeAKfDve-MCiYkW7BFAF4ddb6EapUNX2OI0xkNbc1I8wWc3wb2iLuaW9j1zAJ4gtFtOHlpU7CXpqlfe4yWZo9oSjjftTD2g4NN-TmIBU6PEfJxk~6gD9Pgw~tqA~wKbd9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile",
        isLiked: false,
    },
  
  ]
class SearchResultPage extends Component {
    state ={
        searchData: [],
    }

    
    componentDidMount() {
        this.setState({
            searchData: Searchapi,
        })
    }

    onClickWishlistButton = id => {
        const{searchData} = this.state
       const updatedSearchData = searchData.map(obj => {
        if (obj.id === id) {
            return {...obj, isLiked: !obj.isLiked}
        }
        return obj
       })

       this.setState({
        searchData: updatedSearchData,
       })
    }

    render(){
        const {searchData} = this.state
        const { pathname } = this.props.router || {};
        const [,pageName] = pathname.split('/') 
    return (
        <div className='box-border'>
            <Navbar/>
            <div>
                    <div className='px-2 py-4 mb-[-10px] text-[14px] ml-6 md:px-7 xl:px-14'>
                    <Link href="/">
                        <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span>  </Link>
                    <span className= " mx-3 text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " >  {pageName} &nbsp; /</span> 
                    <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >Billboards</span>
                    </div>
                   <hr className='border border-gray-300 w-[100vw]' />
                   <h2 className='text-right py-3 text-[14px] px-5 md: pr-16 md:mr-16'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
             </div>
        

        <div className="px-8 pb-2">
             <ul className='flex flex-wrap justify-center items-start h-[100vh] overflow-y-auto w-full'>
                   {
                       searchData.map((curElem, ind) => {
                           return <BlogCard key={ind} data={curElem} onClickWishlistButton = {this.onClickWishlistButton}/>
                       })
                   }
               </ul>
        </div>

            <hr className='border border-gray-300 my-4 w-[99vw]'/>

            <div className="mt-8 pl-8">
                <h1 className='text-2xl md:text-3xl font-bold mb-5 mx-3'>People also looked for</h1>
            
                <PeopleAlsoLookFor/>

            </div>/

            <ServiceSection/>
            <Footer/>
       
        </div>
    )
    }
}

export default withRouter(SearchResultPage)