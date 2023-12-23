
import React, {useState} from 'react'
import OtherSearchapi from '@/pages/api/OtherSearchapi'
import BlogCard from '../blogCard'


export default function PeopleAlsoLookFor()  {
    
    const [othersearchData, setothersearchData] = useState(OtherSearchapi)

    
    return(
        <ul className='overflow-x-auto flex items-center'>
            {
             othersearchData.map((curElem, ind) =>
                <BlogCard key={ind} data = {curElem} />
            )}
        </ul>
    )
    

    
}