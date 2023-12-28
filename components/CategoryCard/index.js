export const CategoryCard = (props) => {

    const {title, imageUrl, alt, id} = props
    return (
      <li
        className=
          "mx-3 bg-[#ffffff] flex-col items-center justify-center text-center list-none rounded-lg border-solid border-[rgba(170,170,170,0.30)] border shrink-0 w-[170px] h-[152px] relative overflow-hidden shadow hover:shadow-sm hover:font-bold group"
        
      >
         <img
          className="w-[170px] h-[104px] top-0"
          src={imageUrl}
          alt={alt}
        />
        <h1 className="group-hover:font-bold group-hover: text-[#224757] text-capstext text-center mt-3 font-['Figtree-Regular',_sans-serif] text-sm text-base leading-5 font-normal bottom-[10px]">
          {title}
        </h1>
      </li>
    );
  };
  