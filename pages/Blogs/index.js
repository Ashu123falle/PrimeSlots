import StayLoop from "@/Components/StayLoop/StayLoop"
import Footer from "@/Components/Footer/Footer"
import BlogItemCard from "@/Components/BlogItemCard/BlogItemCard"

const BlogsList = [
    {
        id : 1,
        img :"/assets/blog1.png",
        text : "Outshine the Competition: A Deep Dive into Effective Outdoor Advertising Tactics",
    },
    {
        id : 2,
        img :"/assets/blog2.png",
        text : "Breaking Boundaries: Innovative Approaches to OOH Media Advertising",
    },
    {
        id : 3,
        img :"/assets/blog3.png",
        text : "Driving Success: How OOH Media Enhances Your Marketing ROI",
    },
    {
        id : 4,
        img :"/assets/blog4.png",
        text : "Beyond the Streets: The Evolution of OOH Advertising in a Dynamic Marketplace",
    },
    {
        id : 5,
        img :"/assets/blog5.png",
        text : "Cracking the Code: How OOH Media Drives Brand Recognition and Customer Engagement",
    }
    
]

const Blogs = () => {
    return (
        <>
            <ul className="px-2 py-5 m:px-10 md:px-16 lg:px-32">
                {
                    BlogsList.map((each) => <BlogItemCard blogItemDetails={each} key={each.id}/>)
                }
            </ul>
            <StayLoop />
            <Footer />
        </>
        
    )
}

export default Blogs