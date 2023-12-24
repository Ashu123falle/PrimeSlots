import Navbar from "@/components/Navbar"
import { CategoryCard } from "@/components/CategoryCard"
import Footer from "@/Components/Footer"

import hotpicks from "../api/hotpicks"
import BlogCard  from "@/components/blogCard"
import PeopleAlsoLookFor from '@/Components/PeopleAlsoLookFor'
import ServiceSection from "@/Components/ServicesSection"


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
    id: 9,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 7,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
  {
    id: 8,
    title: 'LED Board',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/243f/f692/9cee2c61159b7963d383118970e277ed?Expires=1704067200&Signature=B8W74jphCxQF9us~v5QN5lRKerx-j9QNRg-G753GVkC3WZ9xEuB~~fOUOqEkIYsNcyBO8OpJEmlLsacxCigv9oeGghSI8dmLX~-sFM~VOK2t5SeebSWpME8PqVGUpuo4oxqtgyhhE4GXkgpk9HkGCXUovjXFxrVBEuLvJijEQ2g3zRGV3d3HijExX3McgyESQRbj-sA5qBgtKeNpTwKgZeqPOYklrZqzom4msgddlPCNDJFk8L0MAwFYcZ1H5aXjqmvXbRNf8aWpHs2usvcoiBBI7bpnoN~iqQL4nh5vCWoBbljJ5~kjgNGwU~rAh93~LYaKTZETmKMwGhi19pojqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: "img2",
  },
]

export default function Home() {
  
    return (
      <main className="bg-whitebg-cover w-full">
        <Navbar/>

        <div>
            <h1 className='px-5 py-4 mb-[-10px] text-[14px]'><span className='text-gray-400 '> Home /</span>
             <span className='text-black font-semibold'>MarketPlace</span> </h1>
            <hr className='border border-gray-300 w-[100vw] mb-3' />
        </div>

        <hr className="mt-3"/>
        
        <div className="p-3 catgeories my-10 flex flex-col overscroll-auto overflow-x-scroll no-scrollbar ">
          <h1 className="text-color-4-text text-left font-['Figtree-SemiBold',_sans-serif] text-base leading-5 font-semibold uppercase text-[#224757] my-5">CATEGORIES</h1>
          <h1 className="text-secondarycolor-1 text-left font-['Figtree-Bold',_sans-serif] text-2xl leading-[17.5px] font-bold relative text-[#00002E] my-5">BROWSE BY CATEGORY</h1>

          <ul className="p-3 mx-3 categories flex justify-start items-center overflow-visible">
              {categoriesList.map(each => (
                <CategoryCard key={each.id} title={each.title} imageUrl={each.imageUrl} alt={each.alt} />
                ))}
          </ul>
        </div>

        <div className="buttons mt-4 flex justify-end">
                
          
              <button class="bg-secondary shrink-0 w-[46px] h-[46px] relative rounded-[50%]">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
                >
                  <svg
                  class="h-[auto] absolute right-[23.91%] left-[23.91%] w-[52.17%] bottom-[23.91%] top-[23.91%] h-[52.17%] overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
                

              </button>

              <button class="bg-[#e2b9ff] rounded-[50%] w-[46px] h-[46px] relative">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex justify-center items-center"
                >

              <svg
                  class="w-6 h-6 relative overflow-visible"
                  
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19L20 12L13 5M20 12L4 12"
                    stroke="#131C5F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                </div>
                

              </button>

        </div>

        <div className="hotpicks p-3  mt-5 " style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/f14e/b26d/1d680359edae64cf6d1becafa42a77ac?Expires=1704067200&Signature=FzkKVug~zZWkX09UFDrVfIEHZKaoeZkiaDb1dP~6RxpSWaFWx7xhHf3vcYjM6H5K3Rihl9M89LWtH-o7Hofp1nXxIiVALFj3kMehkMI~Wo52E75s~yi9UMHOPOSLSHu3~EzwhGbERL3qU6GllRaYyGZa-X9gERVJ~TlH8Rqfoq-dcND7mMFHwkAbPKbvxZQntrVOobTeipgnW2qkIZvq0c1IYdg29C8UIfONdio-EEiNkhLK6FHpJVOYdNdd1XvxOkkL6CgTHK~jLJDx2KuSukWAvOVCIJzaZBwfirSJPNRXcbQTZUNn3~jmyP5L~RQopYuKPivwgg3WaGb6cVbAog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")', height: "80vh"}}>
          <h1 className="text-secondarycolor-1 text-left font-['Inter-Bold',_sans-serif] text-2xl leading-[48px] font-bold  text-[#00002E]">Prime Slots Exclusive</h1>
          <div className="mx-3 categories flex justify-start items-center overscroll-auto overflow-x-scroll no-scrollbar">
              {hotpicks.map(each => (
                <BlogCard key={each.id} data = {each} />
                ))}
          </div>
          <a><h1 className="text-color-2 text-center font-['Figtree-SemiBold',_sans-serif] text-xl leading-[22px] mt-8 font-semibold relative flex self-end justify-center text-[#D292FF]">View All Products 
          <svg
                    class="w-6 h-6 relative overflow-visible"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 19L20 12L13 5M20 12L4 12"
                      stroke="#D292FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
              </h1>
            </a>
        </div>

        <div className="buttons mt-4 flex justify-end">
                
          
              <button class="bg-secondary shrink-0 w-[46px] h-[46px] relative rounded-[50%]">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
                >
                  <svg
                  class="h-[auto] absolute right-[23.91%] left-[23.91%] w-[52.17%] bottom-[23.91%] top-[23.91%] h-[52.17%] overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
                

              </button>

              <button class="bg-[#e2b9ff] rounded-[50%] w-[46px] h-[46px] relative">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex justify-center items-center"
                >

              <svg
                  class="w-6 h-6 relative overflow-visible"
                  
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19L20 12L13 5M20 12L4 12"
                    stroke="#131C5F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                </div>
                

              </button>


              


          </div>

        
        <div className="hotpicks p-3 overscroll-auto overflow-x-scroll no-scrollbar">
          <h1 className="text-secondarycolor-1 text-left font-['Inter-Bold',_sans-serif] text-2xl leading-[32px] font-bold  text-[#00002E]">Hot Pics 🔥</h1>
          <PeopleAlsoLookFor/>
        </div>

        <div className="buttons mt-4 flex justify-end">
                
          
              <button class="bg-secondary shrink-0 w-[46px] h-[46px] relative rounded-[50%]">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
                >
                  <svg
                  class="h-[auto] absolute right-[23.91%] left-[23.91%] w-[52.17%] bottom-[23.91%] top-[23.91%] h-[52.17%] overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
                

              </button>

              <button class="bg-[#e2b9ff] rounded-[50%] w-[46px] h-[46px] relative">
                <div
                  class="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex justify-center items-center"
                >

              <svg
                  class="w-6 h-6 relative overflow-visible"
                  
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19L20 12L13 5M20 12L4 12"
                    stroke="#131C5F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                </div>
                

              </button>


              


          </div>
          <ServiceSection />
      <Footer/>
      </main>
    )
  }