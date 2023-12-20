

export default function BlogCard() {
    console.log("blog data ")

    return (
        <li className="list-none rounded-xl hover:shadow-lg w-[240px] h-[380px] group-hover:h-[400px] shadow
         bg-white rounded-lg shadow border border-slate-300 flex-col justify-start 
         items-start inline-flex m-3">
            <img src="https://s3-alpha-sig.figma.com/img/2fd8/7a45/64dd253446572cc2498028120d988e77?Expires=1704067200&Signature=ClDbx4AeUrl63d0~X8wzIyV6wejLfiKrF6jVs5-oS4~U7tYDby0v7L98lDKMWSZ51pagAcOAUFLMyrWhcWsZkroDR6mFUMS~LxyRq6uKg6fdRM67kQ4Y52z6Ekoe~y1hROyYeqpn~UWj3JXN3~nWIncU~yFUD1wl~SLb126-He9WvAW8aT5rqiIqkF5Y9ozREYNZISw2gic9SYm39ASIDSoAyFJpb-Zr71WRvoVWFbmsRfZeu~u0PmYh6O~3G8wNMy-3iCnY5RcvY2a744V~ngfJFMcnwqoLY~k~DOineq82q~XKr7ASt53fgN~I2tvjy2c5PMbfiY~3SU~95YZHuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
             className="h-[135px] w-[100%] rounded-t-xl" 
            />
            <span className="self-end mt-[-20px] bg-white rounded-full w-10 h-10 flex justify-center items-center mr-4">
            <img src="../../assets/Wishlist.jpg" />
            </span>
            <div className="px-5 flex flex-col w-[100%] justify-between h-[50%]">
            
            <div className="ml-[-6px] h-[21.98px] px-[10px] py-[1.57px] bg-stone-100 rounded-[39.26px] justify-start 
                 gap-[4.71px] items-start self-start">
            <h1 className="text-amber-500 text-sm font-normal font-['Figtree'] leading-tight">Billboard</h1>
            </div>
            <p className="pt-2 text-neutral-950 text-lg font-normal font-['Figtree'] leading-tight">Title of media will come here...</p>
         
            <ul className=" py-[25px] flex flex-wrap m-[-10px] justify-between">
                <li className="h-[25px]  p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tight my-1">Real Estate</li>
                <li className="h-[25px]  p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tight my-1">Retail</li>
                <li className="h-[25px] p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tight my-1">Restaurents</li>
                <li className="h-[25px] p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree'] leading-tightmy-1 ">Auto mobile</li>
            </ul>
            <button className="w-[80px] h-[30px]  bg-white rounded-[5px] border border-indigo-500 text-indigo-500
             text-sm font-medium font-['Figtree'] leading-snug">Book Now</button>
            </div>
        </li>
    )
}
