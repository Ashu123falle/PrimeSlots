import Navbar from "@/components/Navbar"
import { CategoryCard } from "./CategoryCard"

const categoriesList = [
  {
    id: 0,
    title: 'Neon Site',
    imageUrl: '',
    alt: "img1",
  },
  {
    id: 1,
    title: 'Bill Boards',
    imageUrl: '',
    alt: "img2",
  },
  {
    id: 2,
    title: 'Info Board',
    imageUrl: '',
    alt: "img3",
  },
  {
    id: 3,
    title: 'Signage',
    imageUrl: '',
    alt: "img2",
  },
  {
    id: 4,
    title: 'Bridge Sign',
    imageUrl: '',
    alt: "img2",
  },
  {
    id: 5,
    title: 'Traffic Pedestals',
    imageUrl: '',
    alt: "img2",
  },
  {
    id: 6,
    title: 'LED Board',
    imageUrl: '',
    alt: "img2",
  },
]

export default function Home() {
    return (
      <main className="bg-white px-12 bg-cover">
        <Navbar/>

        <div className="tabs-display-cont mt-5 ml-3 flex justify-start">
          <h1 className="text-[#AFAFAF] text-ligtext text-left font-['Figtree-Regular',_sans-serif] text-base leading-5 font-normal relative ">Home</h1>
          <div
              className={
                "m-2 my-3 border-solid border-ligtext border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[13.19px] h-0 relative border-gray-500"
              }
              style={{
                opacity: "0.5",
                
                transform: "rotate(117.051deg) scale(2, 2)",
              }}
            ></div>
          <h1 className="text-[#00002E] text-secondarycolor-1 text-left font-['Figtree-Regular',_sans-serif] text-base leading-5 font-normal relative ">Marketplace</h1>
        </div>

        <hr/>
        
        <div className="catgeories my-10 flex flex-col">
          <h1 className="text-color-4-text text-left font-['Figtree-SemiBold',_sans-serif] text-base leading-5 font-semibold uppercase text-[#224757] my-5">CATEGORIES</h1>
          <h1 className="text-secondarycolor-1 text-left font-['Figtree-Bold',_sans-serif] text-4xl leading-[17.5px] font-bold relative text-[#00002E] my-5">BROWSE BY CATEGORY</h1>
          

          <div className="mx-3 categories flex justify-start items-center">
              {categoriesList.map(each => (
                <CategoryCard key={each.id} title={each.title} imageUrl={each.imageUrl} alt={each.alt} />
                ))}
          </div>
        </div>

      </main>
    )
  }
  