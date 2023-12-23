
import React, {useState} from 'react'

import OtherSearchapi from '@/pages/api/OtherSearchapi'
import BlogCard from '../blogCard'


export default function PeopleAlsoLookFor()  {

    const [othersearchData, setothersearchData] = useState(OtherSearchapi)


    return(
        <ul className='w-[90vw] overflow-x-auto flex '>
            {
             othersearchData.map((curElem, ind) => {
                return <BlogCard key={ind} id={curElem.id} image={curElem.image} heading={curElem.heading} name={curElem.name} description1={curElem.description1} description2={curElem.description2} description3={curElem.description3} description4={curElem.description4} />
            })
                        }
        </ul>
    )

}