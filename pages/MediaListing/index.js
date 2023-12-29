import React,{useState,useEffect} from 'react';
import FilterComponent from './FilterComponent/FilterComponent';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import ServiceSection from "@/Components/ServicesSection";
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor';
import { CategoryCard } from '@/Components/CategoryCard';
import Searchapi from '../api/SearchPageapi';
import BlogCard from '@/Components/blogCard';
import ArrowButton from '@/Components/ArrowButton';
import { useRouter } from 'next/router';

//import PriceFilter from '@/Components/FilterMobileView';
const optionsConfig = [
  {
    key: 'state',
    label: 'Search Location',
    options: ['All', 'Andhra Pradesh', 'Assam', 'Arunachal Pradesh'], // Add more states as needed
    default: 'All',
  },
  {
    key: 'category',
    label: 'Media Categories',
    options: ['All', 'category1', 'category2', 'category3'], // Add more categories as needed
    default: 'All',
  },
  {
    key: 'filter',
    label: 'Filters',
    options: ['All', 'filter1', 'filter2', 'filter3'], // Add more filters as needed
    default: 'All',
  },
];
// Example data
const data = [
  
  //our data items
];
const categoriesList = [
  {
    id: 0,
    title: 'Neon Site',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/b426/6b37/1e58dcdea3b5e1ea4011aa8ab793919f?Expires=1704067200&Signature=Ybr6kGklfTJf8pfWz9Z71rcMtvVQO2Xl5AIDTy17wkavqQcyDG79sGAVfR2U0n6N16wdXj4jW5HuKumCn0PwwpXu-tZuuhu4w6a7NAm-fcOa5Bl0w~bxlflOj5cBzdxOYiSXbqKaFNbiR2cJBApaiLdZanu2~SZhezoTYKkHgzQdll3zPOuimlQ5Je9Rye~xh6TVzYOVXViarjOu9vtUaxGXyA~ea-4t7hCvXXIv8b0HD9Yhr7Par3hEu660T2X~cU-h0od4ZU0esAqEQ8vaCZ8d3WnueH6lcQW~nBTfFM1hmoBscGhEXCJWJGueDIkdGvG7XmscvOpL52gmA79LHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img1",
  },
  {
    id: 1,
    title: 'Bill Boards',
    imageUrl:'https://s3-alpha-sig.figma.com/img/923a/40b9/9185769696ba1c70284e593b870059f9?Expires=1704067200&Signature=YgMsZW2MixRHbU09beOR10bHSi4WugDPCfkfqSYUY~~-MBfzkmSwb1kN8~GL4U06sv1NNEEW0hf4B1WnLJwyGiV0s5~aRiQO5ma5W04tndUQia70twYIOA9b9HTgZXZQ55~yNfcTnxK4CYLTRxSBIZd~kmnpAAuqxIeyoG1Gi88h6DHYyOYi2WxYVb6bhdIEGEySMs0WYh1LSvqvxfOV3Rw0NcHbTAAnR2qwP5c56llCg-1LVj855W1NdoAS7AKUYowbw738tPsomCWn0NJitrGONly0oKJjXuMlN7Gn3WgugwQe3ghA-bnGGUxVNa~aCtCq0p641N-dvA1PtiZ9cA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
     alt: "img2",
  },
  {
    id: 2,
    title: 'Info Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/2c33/43c3/dc4454ec44bff841c83240c9d6a28d9d?Expires=1704067200&Signature=Vpg~akui0kzflHLbcT1y~FBBRDeJit8Qx~CoezJVwN0xih0iRcb-vH3Qdm2gS0n2-MlDrylYluxal8XyFhHXNUMQhLzW0bs~Dku6Gllz~qjL9ihGM4-p2qpdjSMWCV5x3sa8YRp12lua4Dm8J1rcoTYIETnNdVCQHTIt1i1xmGTdaaOOBkWcT7oliz6lICN95-oi~O3dQScFO4Q0eWMzN8RxjIVKg31nL8OPHRbpfP5jatRMd5kwgMdkYGigBlDsLGb4M3pSJ7bZ1BTnLQGuaFN~QDStl7hFSzHArP-NG6uoIOP1n-xwq~fwsK6faXNrq~3PgQN5gdoSqbuIRknJBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img3",
  },
  {
    id: 3,
    title: 'Signage',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/df9c/e6c9/c7c29ea6894b9a0e539ba0af0ec2d8b4?Expires=1704067200&Signature=eiiaiL5w0zzy03CBlQfnSwTii3BpHXdGw7nDwqWHOfbbJhpBfslAo6CzfebEMqN8OeofC4uM2L~I6SCd1FfM9AQ7KaCcD5vdXuslJWLoWlOWdnIr8vsG47lMjdY-DTWY2xy7JETu9TBwU6McVLp5lsilst7Y2yXA8EJudpuoyT2kcV0TfRB6nans2M1t5v7U-ham3s0k9ELKWkhseOJAErhU7ia2qCbL8fm7xvAoGSaKea8CIKga5B1G3EHS7Vvo71~pbx4stDCJHfyDlHXGbJfrR2b4AjuO7H8TAzmQypS4HFl3m~kDt9r8-vp5Gind6jLTnYreEju6AW7huNxYdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 4,
    title: 'Bridge Sign',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d225/d223/3a9a55a2821d5db1d78f97451ca235cf?Expires=1704067200&Signature=BF0e92YdxK4FYJg1oidxpszLj8RJmam1Q~HpAUmQxx9nVYlqzS0qinKuiUGbWegVaIGgeFj8pV20e1FXIxqh52FSijz4cQ6Pby9zUTQC3awsKDtvWZZBdmEK~MqlCCa-NrhSWH2BioY00U3LnkiAozsebn~5vE7w64Kc67KKRKUrINfHmbSkto6JASZ0bDMoaRMdZuRU-oimvxORri9-NJ1tBzcAHILT4y6ybWNPc1GaYBOlKni1u-wSYmtSR7RqZvTLAV-utf7UONetyLDVY9nlunsu16LfXL~cC-8qlTHAnijuYyAociMrr8U1WSrfTdLZC9q3-xKcIjL9VQeuQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 5,
    title: 'Traffic Pedestals',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/f857/273d/84bee1c4bf273221b1c0820a0ae5ed3b?Expires=1704067200&Signature=fmjjQv56DLtumimRhI15eu3bz-8U5Sn~8OyG6aKIHkbZeyNgEgw~kYOQyFoMon-3ZIQ4-CA4q15jG19miw0XNvbH3HFvn34xSlH0XUq1RVs9kkw-se~2ywuh-BibswGzDG27BkAe-KinfPNtZxksgn-gURzXgWIm~HcPLxovaXtYrnhJ1-LWu7nKXxxOB-2hTQ-VQhu8W2WjPL-PvaS9Nw6i9UV99J3Cp-8Sr~zaB6wAQ4pUIJD64Ds-OhPGYpqxMQ9fmrokRUd1ThFs645zT84grQ8auFHhpXrjAFsDX2noS88ADnyiU1ADWj1IUlQPtd9hZJzcg5f2-EMfJDc4pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 6,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 7,
    title: 'Info Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/2c33/43c3/dc4454ec44bff841c83240c9d6a28d9d?Expires=1704067200&Signature=Vpg~akui0kzflHLbcT1y~FBBRDeJit8Qx~CoezJVwN0xih0iRcb-vH3Qdm2gS0n2-MlDrylYluxal8XyFhHXNUMQhLzW0bs~Dku6Gllz~qjL9ihGM4-p2qpdjSMWCV5x3sa8YRp12lua4Dm8J1rcoTYIETnNdVCQHTIt1i1xmGTdaaOOBkWcT7oliz6lICN95-oi~O3dQScFO4Q0eWMzN8RxjIVKg31nL8OPHRbpfP5jatRMd5kwgMdkYGigBlDsLGb4M3pSJ7bZ1BTnLQGuaFN~QDStl7hFSzHArP-NG6uoIOP1n-xwq~fwsK6faXNrq~3PgQN5gdoSqbuIRknJBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img3",
  },
  {
    id: 8,
    title: 'Info Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/2c33/43c3/dc4454ec44bff841c83240c9d6a28d9d?Expires=1704067200&Signature=Vpg~akui0kzflHLbcT1y~FBBRDeJit8Qx~CoezJVwN0xih0iRcb-vH3Qdm2gS0n2-MlDrylYluxal8XyFhHXNUMQhLzW0bs~Dku6Gllz~qjL9ihGM4-p2qpdjSMWCV5x3sa8YRp12lua4Dm8J1rcoTYIETnNdVCQHTIt1i1xmGTdaaOOBkWcT7oliz6lICN95-oi~O3dQScFO4Q0eWMzN8RxjIVKg31nL8OPHRbpfP5jatRMd5kwgMdkYGigBlDsLGb4M3pSJ7bZ1BTnLQGuaFN~QDStl7hFSzHArP-NG6uoIOP1n-xwq~fwsK6faXNrq~3PgQN5gdoSqbuIRknJBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img3",
  },
  {
    id: 9,
    title: 'Info Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/2c33/43c3/dc4454ec44bff841c83240c9d6a28d9d?Expires=1704067200&Signature=Vpg~akui0kzflHLbcT1y~FBBRDeJit8Qx~CoezJVwN0xih0iRcb-vH3Qdm2gS0n2-MlDrylYluxal8XyFhHXNUMQhLzW0bs~Dku6Gllz~qjL9ihGM4-p2qpdjSMWCV5x3sa8YRp12lua4Dm8J1rcoTYIETnNdVCQHTIt1i1xmGTdaaOOBkWcT7oliz6lICN95-oi~O3dQScFO4Q0eWMzN8RxjIVKg31nL8OPHRbpfP5jatRMd5kwgMdkYGigBlDsLGb4M3pSJ7bZ1BTnLQGuaFN~QDStl7hFSzHArP-NG6uoIOP1n-xwq~fwsK6faXNrq~3PgQN5gdoSqbuIRknJBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img3",
  },

]
const MediaListingPage = () => {
   const [searchData, setsearchData] = useState(Searchapi);
   const [isSmallDevice, setIsSmallDevice] = useState(false);

   const router = useRouter();
  const { category } = router.query;

   const onClickWishlistButton = id => {
    const updatedSearchData = searchData.map(obj => {
      if (obj.id === id) {
          return {...obj, isLiked: !obj.isLiked}
      }
      return obj
    })
    setsearchData(updatedSearchData)

}

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 640); // You can adjust the width based on your needs
    };

    // Initial check on mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='box-border' style={{ overflowX: 'hidden' }}>
      <Navbar />
      <div>
      
            <div className='px-2 py-4 mb-[-10px] text-[14px] ml-6 md:px-7 xl:px-14'>
                <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> 
              <span className= " mx-3 text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " >  MarketPlace &nbsp; /</span> 
              <span className="text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >Neon Sites</span>
            </div>
      
        <hr className='border border-gray-300 my-3 w-[99vw]' />

      </div>

      <div className="mt-2 catgeories my-10 flex flex-col w-full pl- md:pl-5 xl:pl-14">
          <h1 className="text-color-4-text text-left mx-8 font-['Figtree']
           text-sm sm:text-base leading-5 font-semibold uppercase text-[#224757] mt-5">CATEGORIES</h1>
          <h1 className="text-secondarycolor-1 text-left mx-8 font-['Figtree'] 
          text-3xl md:text-4xl leading-[17.5px] font-bold relative text-[#00002E] mb-5 mt-2">Browse By Category</h1>

          <ul className="ml-2 categories flex justify-start items-center overscroll-auto overflow-x-scroll no-scrollbar md: p-3 ">
              {categoriesList.map(each => (
                <CategoryCard key={each.id} title={each.title} imageUrl={each.imageUrl} alt={each.alt} />
                ))}
          </ul>
      </div>

      <FilterComponent data={data} optionsConfig={optionsConfig} />

      <div className="px-5 md:px-8 xl:px-8 pb-5">
      <ul className='flex flex-wrap justify-around max-h-[90vh] overflow-y-auto w-full overscroll-auto mb-4 md:no-scrollbar'>
                   {
                       searchData.map((curElem, ind) => {
                           return <BlogCard key={ind} data={curElem} onClickWishlistButton = {onClickWishlistButton}/>
                       })
                   }
               </ul>

        <div>
      
        <hr className='border border-gray-300 mb-7 w-full absolute left-0 right-0' />
      
        
        </div>
        <div className="p-3 md:pl-8 xl:pl-7 h-full mt-5 md:pl-4 ">
        <h1 className="text-secondarycolor-1 mx-3 my-4 text-left font-['Inter'] text-2xl md:text-4xl leading-none font-bold  text-[#00002E] md:mx-0 md:mb-0">People also look for</h1>
          <PeopleAlsoLookFor/>
        </div>

        <ServiceSection />
      </div>
      
    </div>
  )
};

export default MediaListingPage;
