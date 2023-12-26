export const CategoryCard = (props) => {

    const {title, imageUrl, alt, id} = props
    return (
      <li
        className=
          "mx-3 bg-[#ffffff] list-none rounded-lg border-solid border-[rgba(170,170,170,0.30)] border shrink-0 w-[170px] h-[145px] relative overflow-hidden shadow hover:shadow-2xl hover:font-bold group"
        
      >
         <img
          className="w-[170px] h-[104px] absolute left-[calc(50%_-_85px)] top-0"
          src={imageUrl}
          alt={alt}
        />
        <h1 className="group-hover:font-bold text-[#224757] text-capstext text-center mt-3 font-['Figtree-Regular',_sans-serif] text-base leading-5 font-normal absolute left-[calc(50%_-_35px)] bottom-[15px]">
          {title}
        </h1>
       
      </li>
    );
  };
  