
export default function BlogCard(props) {
    
   const {data} = props 
   const {image, heading, name ,description1,description2,description3,description4,id,isLiked} = data
   const {onClickWishlistButton} = props 

   const addToLikeButton = id => {
    onClickWishlistButton(id)
   } 

    return (
            <li className="list-none rounded-xl w-[350px] h-[380px] shrink-0  sm:w-[290px] md:w-[250px] bg-white shadow border border-slate-300 
                flex-col justify-start items-start inline-flex m-3 group hover:shadow-2xl  hover:h-[390px]
                "> 
                <img src={image}
                    className="h-[180px] w-[100%] rounded-t-xl"
                />
                <span className="self-end mt-[-20px] bg-white rounded-full w-10 h-10 flex justify-center items-center mr-4 border" onClick={() => onClickWishlistButton(id)}>
            
                {isLiked ? 
                <svg className="transition-transform duration-300 transform scale-150" width="20" height="20" viewBox="0 0 34 34" fill="none"
                 xmlns="http://www.w3.org/2000/svg" alt="liked">
                <g id="liked">
                <path id="Vector" d="M12.0377 7.61377C9.15938 7.61377 6.8252 9.92397 6.8252 12.7742C6.8252 15.075 7.73739 20.5357 16.7165 26.0558C16.8774 26.1536 17.062 26.2054 17.2503 26.2054C17.4386 26.2054 17.6232 26.1536 17.7841 26.0558C26.7632 20.5357 27.6754 15.075 27.6754 12.7742C27.6754 9.92397 25.3412 7.61377 22.4628 7.61377C19.5845 7.61377 17.2503 10.7413 17.2503 10.7413C17.2503 10.7413 14.9161 7.61377 12.0377 7.61377Z" fill="#E80101"/>
                </g>
                </svg> :
                <svg  width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" alt="not-liked" 
                >
                <g id="notLiked">
                <path id="Vector" d="M11.8438 7.85938C9.08275 7.85938 6.84375 10.0754 6.84375 12.8094C6.84375 15.0164 7.71875 20.2544 16.3317 25.5494C16.486 25.6432 16.6632 25.6929 16.8438 25.6929C17.0243 25.6929 17.2015 25.6432 17.3558 25.5494C25.9688 20.2544 26.8438 15.0164 26.8438 12.8094C26.8438 10.0754 24.6047 7.85938 21.8438 7.85938C19.0828 7.85938 16.8438 10.8594 16.8438 10.8594C16.8438 10.8594 14.6047 7.85938 11.8438 7.85938Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                }
                     
                </span>
                <div className="px-4 pt-0 pb-2  flex flex-col w-[100%] justify-between h-[50%]">
                    <div className="ml-[-6px] h-[21.98px] px-[10px] py-[1.57px] bg-stone-100 rounded-[39.26px] justify-start 
                 gap-[4.71px] items-start self-start">
                        <h1 className="text-amber-500 text-sm font-normal leading-tight font-['Figtree-Regular',_sans-serif]">{heading}</h1>
                    </div>

                    <p className="pt-1 text-neutral-950 text-base font-normal font-['Figtree-Regular',_sans-serif]leading-tight">{name}</p>


                    <ul className=" pt-[10px] p-2 flex flex-wrap m-[-10px] justify-between">
                        <li className="h-[25px]  p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree-Regular',_sans-serif] leading-tight my-1">{description1}</li>
                        <li className="h-[25px]  p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree-Regular',_sans-serif] leading-tight my-1">{description2}</li>
                        <li className="h-[25px] p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree-Regular',_sans-serif] leading-tight my-1">{description3}</li>
                        <li className="h-[25px] p-2 flex items-center bg-indigo-100 bg-opacity-60 rounded 
                text-indigo-600 text-sm font-normal font-['Figtree-Regular',_sans-serif] leading-tightmy-1 ">{description4}</li>
                    </ul>

                <button className="w-[90px] h-[35px] mt-2 mb-2 rounded-[5px] border border-indigo-500 group-hover:bg-blue-500 group-hover:text-white bg-transparent
             text-sm font-medium font-['Figtree-Regular',_sans-serif] leading-snug text-indigo-500">Book Now</button>
                </div>
            </li>
        
    )
}