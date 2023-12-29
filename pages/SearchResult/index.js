import {Component} from 'react'

import Footer from '@/Components/Footer'
import BlogCard from '@/Components/blogCard'
import Searchapi from '../api/SearchPageapi'
import Navbar from '@/Components/Navbar'
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'
import ServiceSection from '@/Components/ServicesSection'

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
    return (
        <div className='box-border'>
            <Navbar/>
            <div>
                   <h1 className='px-5 py-4 mb-[-10px] text-[14px] md:pl-16 md:mx-16'><span className='text-gray-400 '> Home / MarketPlace /</span> <span className='text-black font-semibold'>Billboards</span> </h1>
                   <hr className='border border-gray-300 w-[100vw]' />
                   <h2 className='text-right py-3 text-[14px] px-5 md: pr-16 md:mr-16'><span className='font-semibold'>Showing 1-20</span> <span className='text-gray-400'>out of 2356 Products</span></h2>
             </div>

        <div className="px-5 md:px-1 lg:px-1 xl:px-16 pb-2">
             <ul className='flex flex-wrap justify-center items-start h-[120vh] overflow-y-auto w-full'>
                   {
                       searchData.map((curElem, ind) => {
                           return <BlogCard key={ind} data={curElem} onClickWishlistButton = {this.onClickWishlistButton}/>
                       })
                   }
               </ul>
        

            <hr className='border border-gray-300 my-4 w-[99vw]'/>

            <div className="pt-2">
                <h1 className='text-2xl md:text-3xl font-bold mb-5'>People also looked for</h1>
            
                <PeopleAlsoLookFor/>

            </div>

            <ServiceSection/>
        </div>
        </div>
    )
    }
}

export default SearchResultPage