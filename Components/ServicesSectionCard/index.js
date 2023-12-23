
const ServiceSectionCard = (props) => {
    const {itemDetails} = props
    const {text} = itemDetails
    console.log(text)

    return (
        <li className="m-10 flex flex-col justify-center items-center">
            <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
                <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
                
            </div>
            <h1 className="// FAST DELIVERY text-black text-l font-bold font-'Roboto' leading-7 my-3">{text}</h1>
            <div className="w-[236.94px] h-3 bg-slate-300 rounded-[50px]" />
        </li>
    )
}

export default ServiceSectionCard