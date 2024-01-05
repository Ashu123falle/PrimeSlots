import ServiceSectionCard from "../ServicesSectionCard/ServicesSectionCard"

const serviceItems = [
    {
        id : 1,
        text : "FAST DELIVERY",
        image : '/assets/icondelivery.png',
    },
    {
        id : 2,
        text : "24/7 CUSTOMER SERVICE",
        image:'/assets/IconCustomerservice.png',
    },
    {
        id : 3,
        text : "MONEY BACK GUARANTEE",
        image: '/assets/shieldtick.png',
    }
]

const ServiceSection = () => {
    return(
        <ul className="flex flex-row justify-center items-center w-100 flex-wrap my-6">
           {
            serviceItems.map((each) => (
                <ServiceSectionCard key={each.id} itemDetails={each}/>
            ))
           } 
        </ul>
    )
}

export default ServiceSection