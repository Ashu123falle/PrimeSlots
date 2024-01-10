import ServiceSectionCardBlue from "../ServiceSectionCardBlue/ServiceSectionCardBlue"

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

const ServiceSectionBlue = () => {
    return(
        <ul className="flex flex-row justify-center items-center w-100 flex-wrap my-6">
           {
            serviceItems.map((each) => (
                <ServiceSectionCardBlue key={each.id} itemDetails={each}/>
            ))
           } 
        </ul>
    )
}

export default ServiceSectionBlue