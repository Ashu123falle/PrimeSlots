
import {useEffect, useState} from 'react'
import BlogCard from '../blogCard/blogCard'

const OtherSearchapi = [
    {
        id:10,
        image:"/assets/Switch.png",     
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:11,
        image:"/assets/Switch (1).png",
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:12,
        image:"/assets/Switch (2).png",    
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:13,
        image:"/assets/Switch (3).png",   
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },
    {
        id:14,
        image:"/assets/Switch.png",     
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:15,
        image:"/assets/Switch (1).png",       
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },
    {
    id:16,
    image:"/assets/Switch (2).png",   
    heading:"Digital Boarding",
    name:"Title of media will come here",
    description1: "Real Estate",
    description2: "Retail",
    description3: "Resturants",
    description4: "AutoMobile"
    },
    {
        id:17,
        image:"/assets/Switch (3).png",      
        heading:"Digital Boarding",
        name:"Title of media will come here",
        description1: "Real Estate",
        description2: "Retail",
        description3: "Resturants",
        description4: "AutoMobile"
    },

    {
        id:18,
        image:"/assets/Switch.png",      
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