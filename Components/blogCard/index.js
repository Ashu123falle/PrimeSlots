import wishlist from '@/pages/assets/Wishlist.svg'
import Image from 'next/image'

export default function BlogCard(props) {
   

    return (
        
            <li className="list-none rounded-xl w-[350px] h-[380px] shrink-0  sm:w-[290px] md:w-[250px] bg-white shadow border border-slate-300 
                flex-col justify-start items-start inline-flex m-3 group hover:shadow-2xl  hover:h-[390px]
                "> 
                <img src={props.image}
                    className="h-[180px] w-[100%] rounded-t-xl"
                />
                <span className="self-end mt-[-20px] bg-white rounded-full w-10 h-10 flex justify-center items-center mr-4">
                    <Image src={wishlist} />
                </span>
                <div className="px-4 pt-0 pb-2  flex flex-col w-[100%] justify-between h-[50%]">
                    <div className="ml-[-6px] h-[21.98px] px-[10px] py-[1.57px] bg-stone-100 rounded-[39.26px] justify-start 
                 gap-[4.71px] items-start self-start">
                        <h1 className="text-amber-500 text-sm font-normal font-['Figtree'] leading-tight">{props.heading}</h1>
                    </div>

                    <p className="pt-1 text-neutral-950 text-base font-normal font-['Figtree'] leading-tight">{props.name}</p>


                    <ul className=" pt-[10px] p-2 flex flex-wrap m-[-10px] justify-between">
                        <li className="h-[25px]  p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tight my-1">{props.description1}</li>
                        <li className="h-[25px]  p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tight my-1">{props.description2}</li>
                        <li className="h-[25px] p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tight my-1">{props.description3}</li>
                        <li className="h-[25px] p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tightmy-1 ">{props.description4}</li>
                    </ul>

                <button className="w-[90px] h-[35px] mt-2 mb-2 rounded-[5px] border border-indigo-500 group-hover:bg-blue-500 group-hover:text-white bg-transparent
             text-sm font-medium font-['Figtree'] leading-snug text-indigo-500">Book Now</button>
                </div>
            </li>
        
    )
}