
import {Component} from 'react'
import OtherSearchapi from '@/pages/api/OtherSearchapi'
import BlogCard from '../blogCard'


class PeopleAlsoLookFor extends Component {
    
    state ={
        searchData: [],
    }

    componentDidMount() {
        this.setState({
            searchData: OtherSearchapi,
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


    render() {
        const {searchData} = this.state
    return(
        <ul className='flex justify-start items-center overscroll-auto overflow-x-scroll no-scrollbar md:p-6 md:pr-0 '>
            {
             searchData.map((curElem, ind) =>
                <BlogCard key={ind} data = {curElem} onClickWishlistButton={this.onClickWishlistButton}/>
            )}
        </ul>
    )
    }
}

export default PeopleAlsoLookFor