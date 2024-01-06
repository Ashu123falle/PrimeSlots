
import {useEffect, useState} from 'react'
import BlogCard from '../blogCard/blogCard'

const OtherSearchapi = [
    {
        id:10,
        image:"https://s3-alpha-sig.figma.com/img/d0d6/fb64/ac317a81274e933ab56953f482e79f71?Expires=1704067200&Signature=NcZuFsVC3GSR~Zxevtq9KAcjJzChWDcJ50X41THeKTWdaq4UFub4BkdyUYx7nkG091JDN7Y~g33kun6egvsTVom8RMW5xFrUkAm1KRZfGmZ0U~uQ2jh4iAFQlV4kML1Yg~r4JUfm1kPegKkhWSEt66EJiGRegCswZlt82x8kUqI9Kci6BwApuJo-jfqrPNOlEBXOYYcDapuNKv-~d7YVTxUP5aYlCF5fQg0D0YltKKCDzBsQuq5YoLvqyqK8fY236VJNCnA66LmLV7i79Z2Q23WW9y1M28QQCIiryc9L8Fz65K5zfWtujNXfs4j5ANuXIqZ0fDvrRze8EpIbvm0npQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:11,
        image:"https://s3-alpha-sig.figma.com/img/2fd8/7a45/64dd253446572cc2498028120d988e77?Expires=1704067200&Signature=ClDbx4AeUrl63d0~X8wzIyV6wejLfiKrF6jVs5-oS4~U7tYDby0v7L98lDKMWSZ51pagAcOAUFLMyrWhcWsZkroDR6mFUMS~LxyRq6uKg6fdRM67kQ4Y52z6Ekoe~y1hROyYeqpn~UWj3JXN3~nWIncU~yFUD1wl~SLb126-He9WvAW8aT5rqiIqkF5Y9ozREYNZISw2gic9SYm39ASIDSoAyFJpb-Zr71WRvoVWFbmsRfZeu~u0PmYh6O~3G8wNMy-3iCnY5RcvY2a744V~ngfJFMcnwqoLY~k~DOineq82q~XKr7ASt53fgN~I2tvjy2c5PMbfiY~3SU~95YZHuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boardingggg",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:12,
        image:"https://s3-alpha-sig.figma.com/img/059c/68db/bb534e560011ffa2aa844e470c4903e2?Expires=1704067200&Signature=WbME2o00scLkHgZinLX3yeveVpR30lzijsKFs2T9KfXSjP--bj5HERQRw5ov~qWtuO05hqqW5mtLZCMJiayIdUXTrQjUSAZ62JLHqeUTis9J~irmPF5X7AA4cQgtc8N0F~v5uTc54NpYRlY8E6ZcdW0WdKPdsHasqW7bRqk~dJCQbMfWVyP17a3O-eXjp-L6YFG7ad3xmDqxsRvMGtmyMCzUlEkRM9Qr3TIHb40lu-Jlw7dp3qfiGLJUWryqI7JgBuIXsu1ozqs3TBEO1qqD6MKRmPUJg2DmlfD8ySL4B3FMod~qY4mPSnbncz4gST~deeavSesz2Af7HGE5rfbfhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:13,
        image:"https://s3-alpha-sig.figma.com/img/1949/a96c/fb7f996dbc6aaeedd840eefee921821d?Expires=1704067200&Signature=jT3Ug~h5C2-OZSezvxD0glstU7B8Ebr9xo9lA0-u8grKqVRusV0v9hEfD16SfiY5IYgvDfWS70ca9xqnFRtlMoEtbfYtKBaKE~oafLM1n3Wx~vKRVL2mnfUMRwGAoqH39kEmnQJHFTuA-W-KMCoGNZHG-qTQCA0zmQzq-CE~cApRH3nmGmfv3K8vxfxhn~NZJ9cDDcQHLrKrETbwFZX6jGS96Vig~DV6h4~LsIqgdhyyZ3B92FSpdT4fDnfysXFHANDJqsSXpH~yzo8KFZ~DJCkRe8uE2VTa5Ehh-fUeWcerLrZOvOcWVOuiGNWFgFMNs4EG4btxXuQkn8a2g7IABw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },
    {
        id:14,
        image:"https://s3-alpha-sig.figma.com/img/1949/a96c/fb7f996dbc6aaeedd840eefee921821d?Expires=1704067200&Signature=jT3Ug~h5C2-OZSezvxD0glstU7B8Ebr9xo9lA0-u8grKqVRusV0v9hEfD16SfiY5IYgvDfWS70ca9xqnFRtlMoEtbfYtKBaKE~oafLM1n3Wx~vKRVL2mnfUMRwGAoqH39kEmnQJHFTuA-W-KMCoGNZHG-qTQCA0zmQzq-CE~cApRH3nmGmfv3K8vxfxhn~NZJ9cDDcQHLrKrETbwFZX6jGS96Vig~DV6h4~LsIqgdhyyZ3B92FSpdT4fDnfysXFHANDJqsSXpH~yzo8KFZ~DJCkRe8uE2VTa5Ehh-fUeWcerLrZOvOcWVOuiGNWFgFMNs4EG4btxXuQkn8a2g7IABw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:15,
        image:"https://s3-alpha-sig.figma.com/img/1949/a96c/fb7f996dbc6aaeedd840eefee921821d?Expires=1704067200&Signature=jT3Ug~h5C2-OZSezvxD0glstU7B8Ebr9xo9lA0-u8grKqVRusV0v9hEfD16SfiY5IYgvDfWS70ca9xqnFRtlMoEtbfYtKBaKE~oafLM1n3Wx~vKRVL2mnfUMRwGAoqH39kEmnQJHFTuA-W-KMCoGNZHG-qTQCA0zmQzq-CE~cApRH3nmGmfv3K8vxfxhn~NZJ9cDDcQHLrKrETbwFZX6jGS96Vig~DV6h4~LsIqgdhyyZ3B92FSpdT4fDnfysXFHANDJqsSXpH~yzo8KFZ~DJCkRe8uE2VTa5Ehh-fUeWcerLrZOvOcWVOuiGNWFgFMNs4EG4btxXuQkn8a2g7IABw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },
    {
    id:16,
    image:"https://s3-alpha-sig.figma.com/img/d0d6/fb64/ac317a81274e933ab56953f482e79f71?Expires=1704067200&Signature=NcZuFsVC3GSR~Zxevtq9KAcjJzChWDcJ50X41THeKTWdaq4UFub4BkdyUYx7nkG091JDN7Y~g33kun6egvsTVom8RMW5xFrUkAm1KRZfGmZ0U~uQ2jh4iAFQlV4kML1Yg~r4JUfm1kPegKkhWSEt66EJiGRegCswZlt82x8kUqI9Kci6BwApuJo-jfqrPNOlEBXOYYcDapuNKv-~d7YVTxUP5aYlCF5fQg0D0YltKKCDzBsQuq5YoLvqyqK8fY236VJNCnA66LmLV7i79Z2Q23WW9y1M28QQCIiryc9L8Fz65K5zfWtujNXfs4j5ANuXIqZ0fDvrRze8EpIbvm0npQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile"
    },
    {
        id:17,
        image:"https://s3-alpha-sig.figma.com/img/1949/a96c/fb7f996dbc6aaeedd840eefee921821d?Expires=1704067200&Signature=jT3Ug~h5C2-OZSezvxD0glstU7B8Ebr9xo9lA0-u8grKqVRusV0v9hEfD16SfiY5IYgvDfWS70ca9xqnFRtlMoEtbfYtKBaKE~oafLM1n3Wx~vKRVL2mnfUMRwGAoqH39kEmnQJHFTuA-W-KMCoGNZHG-qTQCA0zmQzq-CE~cApRH3nmGmfv3K8vxfxhn~NZJ9cDDcQHLrKrETbwFZX6jGS96Vig~DV6h4~LsIqgdhyyZ3B92FSpdT4fDnfysXFHANDJqsSXpH~yzo8KFZ~DJCkRe8uE2VTa5Ehh-fUeWcerLrZOvOcWVOuiGNWFgFMNs4EG4btxXuQkn8a2g7IABw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:18,
        image:"https://s3-alpha-sig.figma.com/img/1949/a96c/fb7f996dbc6aaeedd840eefee921821d?Expires=1704067200&Signature=jT3Ug~h5C2-OZSezvxD0glstU7B8Ebr9xo9lA0-u8grKqVRusV0v9hEfD16SfiY5IYgvDfWS70ca9xqnFRtlMoEtbfYtKBaKE~oafLM1n3Wx~vKRVL2mnfUMRwGAoqH39kEmnQJHFTuA-W-KMCoGNZHG-qTQCA0zmQzq-CE~cApRH3nmGmfv3K8vxfxhn~NZJ9cDDcQHLrKrETbwFZX6jGS96Vig~DV6h4~LsIqgdhyyZ3B92FSpdT4fDnfysXFHANDJqsSXpH~yzo8KFZ~DJCkRe8uE2VTa5Ehh-fUeWcerLrZOvOcWVOuiGNWFgFMNs4EG4btxXuQkn8a2g7IABw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

]

const PeopleAlsoLookFor = () => {
    const [searchData, setSearchData] = useState([])

   useEffect(() => {
        setSearchData(OtherSearchapi)
   },[])

    const onClickWishlistButton = id => {
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


    return(
        <ul className='flex justify-start items-center overscroll-auto overflow-x-scroll no-scrollbar md:p-6 md:pr-0 '>
            {
             searchData.map((curElem, ind) =>
                <BlogCard key={ind} data = {curElem} onClickWishlistButton={onClickWishlistButton}/>
            )}
        </ul>
    )
    
}

export default PeopleAlsoLookFor