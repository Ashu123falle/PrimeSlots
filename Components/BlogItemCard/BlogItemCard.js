import Image from "next/image"; 


const BlogItemCard = (props) => {
    const {blogItemDetails} = props 
    const {image , text} = blogItemDetails 

    return (
        <li className="border-t border-zinc-400 flex flex-col sm:flex-row flex-start items-center  pt-5 sm:pt-7 md:pt-10 pb-3 sm:pb-5 md:pb-10 xl:w-[80%] 2xl:w-[70%]">
            <Image height={200} width={200}  alt="blog-image" src={image} className="mb-5 sm:mb-0"/>
            <div className="ml-2 sm:ml-5 md:ml-10 lg:ml-15 ">
                <h1 className="text-neutral-900 text-base md:text-xl lg:text-2xl xl:text-3xl font-medium font-['Figtree']">{text}</h1>
                <p className="text-neutral-500 text-sm md:text-base lg:text-xl font-normal font-['Figtree'] leading-[30px] tracking-wide">4 Min . August 19, 2022</p>
            </div>
        </li>
    )
}

export default BlogItemCard