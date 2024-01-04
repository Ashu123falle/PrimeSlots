import ServiceSectionCard from "../ServicesSectionCard/ServicesSectionCard"
import icondelivery from "@/pages/assets/icondelivery.png"
import IconCustomerservice from "@/pages/assets/IconCustomerservice.png"
import shieldtick from "@/pages/assets/shieldtick.png"


const serviceItems = [
    {
        id : 1,
        text : "FAST DELIVERY",
        image : icondelivery,
    },
    {
        id : 2,
        text : "24/7 CUSTOMER SERVICE",
        image:IconCustomerservice,
    },
    {
        id : 3,
        text : "MONEY BACK GUARANTEE",
        image:shieldtick,
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