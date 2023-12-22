import ServiceSectionCard from "../ServicesSectionCard"

const serviceItems = [
    {
        id : 1,
        text : "FAST DELIVERY",
    },
    {
        id : 2,
        text : "24/7 CUSTOMER SERVICE"
    },
    {
        id : 3,
        text : "MONEY BACK GUARANTEE"
    }
]

const ServiceSection = () => {
    return(
        <ul className=" border-blue-500 flex flex-row justify-center items-center">
           {
            serviceItems.map((each) => (
                <ServiceSectionCard key={each.id} itemDetails={each}/>
            ))
           } 
        </ul>
    )
}

export default ServiceSection