import Image from 'next/image';
import Link from 'next/link';

export const CategoryCard = (props) => {

    const {title, imageUrl, alt, id} = props
    return (
      <li
        className=
          "mx-3 bg-[#ffffff] flex-col items-center justify-center text-center list-none rounded-lg border-solid border-[rgba(170,170,170,0.30)]border shrink-0 w-[170px] h-[152px] relative overflow-hidden shadow hover:shadow-sm hover:font-bold group transition-transform duration-300 transform-gpu hover:scale-105"
        
      >
         <Link href={`/MediaListing?category=${encodeURIComponent(title)}`}>
         <Image
         width={170}
         height={104}
          className="top-0"
          src={imageUrl}
          alt={alt}
        />
       
           <h1 className="group-hover:font-bold group-hover: text-[#224757] text-capstext text-center 
           mt-3 font-['Figtree-Regular',_sans-serif]  text-base leading-5 font-normal bottom-[10px]">
          {title}
        </h1>
        </Link>
      </li>
    );
  };
  