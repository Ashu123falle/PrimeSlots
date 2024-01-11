import Image from "next/image"

const BlogItemCard = (props) => {
    const {blogItemDetails} = props
    const {text , img} = blogItemDetails

    return(
        <li className="border-t border-zinc-400 flex flex-col sm:flex-row flex-start items-center">
            <Image height={30} width={30} className="w-100 sm:w-[20%]" src={img}/>
            <div>
                <h1>{text}</h1>
            </div>
        </li>
    )
}

export default BlogItemCard