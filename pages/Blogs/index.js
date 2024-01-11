import ContactUsnavbar from "@/Components/ContactUsnavbar/ContactUsnavbar"
import BlogItemCard from "@/Components/BlogItemCard/BlogItemCard"
import StayLoop from "@/Components/StayLoop/StayLoop"
import Footer from "@/Components/Footer/Footer"

const blogsList = [
    {
        id : 1,
        image :"/assets/blog1.png",
        text : "Outshine the Competition: A Deep Dive into Effective Outdoor Advertising Tactics",
    },
    {
        id : 2,
        image :"/assets/blog2.png",
        text : "Breaking Boundaries: Innovative Approaches to OOH Media Advertising",
    },
    {
        id : 3,
        image :"/assets/blog3.png",
        text : "Driving Success: How OOH Media Enhances Your Marketing ROI",
    },
    {
        id : 4,
        image :"/assets/blog4.png",
        text : "Beyond the Streets: The Evolution of OOH Advertising in a Dynamic Marketplace",
    },
    {
        id : 5,
        image :"/assets/blog5.png",
        text : "Cracking the Code: How OOH Media Drives Brand Recognition and Customer Engagement",
    }
    
]


function Blogs() {
    return (
        <>
           <ContactUsnavbar />
            
            <div className="flex flex-col justify-center items-center">
                <ul className="px-2 py-5 sm:px-10 md:px-16 lg:px-32  xl:flex xl:flex-col xl:justify-center xl:items-center">
                    {
                        blogsList.map((each) => <BlogItemCard blogItemDetails={each} key={each.id}/>)
                    }
                </ul>
                <button className="text-pink-600 text-base font-normal font-['Figtree'] tracking-wide w-[145.79px] h-[49.40px] px-[30.40px] py-[15.20px] bg-white rounded-[50px] shadow border border-pink-600 justify-center items-center gap-[7.60px] inline-flex mb-5 sm:mb-10 md:mb-15 lg:mb-20">Load More</button>
            </div>
            <StayLoop />
            <Footer />
        </>
    )
}

export default Blogs;