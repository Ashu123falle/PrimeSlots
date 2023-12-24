import Image from "next/image"; 


const ServiceSectionCard = (props) => {
    const {itemDetails} = props
    const {text,image} = itemDetails

    return (
        <li className="m-10 flex flex-col justify-center items-center">
            <div className="w-20 h-20 bg-zinc-300 rounded-full flex flex-row justify-center items-center">
                <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
                    <Image src={image}></Image>
                </div>
            </div>
            <h1 className="// FAST DELIVERY text-black text-l font-bold font-'Roboto' leading-7 my-3">{text}</h1>
            <div className="w-[236.94px] h-3 bg-slate-300 rounded-[50px]" />
        </li>
    )
}

export default ServiceSectionCard