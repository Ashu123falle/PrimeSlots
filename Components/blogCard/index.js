

export default function BlogCard() {
    console.log("blog data ")

    return (
        <li className="list-none rounded-xl shadow-lg w-[240px] h-[340px]
         bg-white rounded-lg shadow border border-slate-300 flex-col justify-start 
         items-start inline-flex m-3">
            <img src="https://s3-alpha-sig.figma.com/img/2fd8/7a45/64dd253446572cc2498028120d988e77?Expires=1704067200&Signature=ClDbx4AeUrl63d0~X8wzIyV6wejLfiKrF6jVs5-oS4~U7tYDby0v7L98lDKMWSZ51pagAcOAUFLMyrWhcWsZkroDR6mFUMS~LxyRq6uKg6fdRM67kQ4Y52z6Ekoe~y1hROyYeqpn~UWj3JXN3~nWIncU~yFUD1wl~SLb126-He9WvAW8aT5rqiIqkF5Y9ozREYNZISw2gic9SYm39ASIDSoAyFJpb-Zr71WRvoVWFbmsRfZeu~u0PmYh6O~3G8wNMy-3iCnY5RcvY2a744V~ngfJFMcnwqoLY~k~DOineq82q~XKr7ASt53fgN~I2tvjy2c5PMbfiY~3SU~95YZHuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
             className="h-[135px] w-[100%] rounded-t-xl" 
            />
            <span className="self-end m-0 bg-white rounded-2xl">
                    <img src="../../assets/Wishlist.jpg" />
            </span>
            <div className="p-5 flex flex-col w-[100%]">
                
            <div>
                <h1>Billboard</h1>
                <p>Title will come here</p>
            </div>
            <ul>
                <li>Real Estate</li>
                <li>Real Estate</li>
                <li>Real Estate</li>
                <li>Real Estate</li>
            </ul>
            <button>Book Now</button>
            </div>
        </li>
    )
}
