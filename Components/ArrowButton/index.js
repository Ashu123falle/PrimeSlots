import React from 'react';

const ArrowButton = ({ bgColor, svgColor, svgPath }) => {
  return (
    <button className={`bg-${bgColor} rounded-[50%] w-[46px] h-[46px] relative`}>
      <div className="bg-secondary rounded-[50%] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex justify-center items-center">
        <svg
          className="w-6 h-6 relative overflow-visible"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={svgPath}
            stroke={svgColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default ArrowButton;
