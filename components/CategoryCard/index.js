export const CategoryCard = (props) => {

    const {title, imageUrl, alt, id} = props

    return (
      <div
        className={
          "mx-3 bg-[#ffffff] rounded border-solid border-[rgba(170,170,170,0.30)] border shrink-0 w-[170px] h-[145px] relative overflow-hidden "
        }
        style={{ boxShadow: "0px 4px 8px 0px rgba(81, 76, 76, 0.09)" }}
      >
        <div className="text-[#224757] text-capstext text-center font-['Figtree-Regular',_sans-serif] text-base leading-5 font-normal absolute left-[calc(50%_-_35px)] bottom-[15px]">
          {title}
        </div>
        <img
          className="w-[170px] h-[104px] absolute left-[calc(50%_-_85px)] top-0"
          src={imageUrl}
        />
      </div>
    );
  };
  