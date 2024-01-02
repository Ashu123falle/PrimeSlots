import {Component} from 'react'
import { withRouter } from 'next/router';

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
        const { pathname } = this.props.router || {};
        const [,pageName] = pathname.split('/') 
    return (
        <div className='box-border'>
            <Navbar/>
            <div>
                    <div className='px-2 py-4 mb-[-10px] text-[14px] ml-6 md:px-7 xl:px-14'>
                        <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> 
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