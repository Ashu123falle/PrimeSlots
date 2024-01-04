import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';

import fullScreenIcon from '@/pages/assets/ant-design_fullscreen-outlined.svg'
import halfScreenIcon from '@/pages/assets/halfscreen-svgrepo-com.svg' 

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative ">
      <div className="overflow-hidden rounded-lg">
        <div
          className="w-full flex transition-transform duration-500 transform"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
         { images && images.map((image, index) => (
            <div
              key={index}
              className="w-full rounded-lg flex-shrink-0 h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-t-md
              relative sm:p-1"
              style={{ backgroundImage: `url(${image})` }}
            >
              <Popup
              trigger={
                <span className="absolute left-[87%] right-0 sm:left-[92%] md:left-[94%] lg:left-[95%] xl:left-[96%] cursor-pointer  w-[37px] h-[37px] bg-white rounded-full border
                border-neutral-200 flex justify-center items-center ">
                 <Image src={fullScreenIcon}/>
               </span>
              }
              modal
              
               >
                {close => (
                  <div className='bg-white h-[100vh] md:h-[100vh] w-[100vw] bg-cover bg-no-repeat p-2
                  ' style={{ backgroundImage: `url(${image})`}}>
                    
                    <span className="absolute left-[87%] right-0 p-2 sm:left-[92%] md:left-[94%] lg:left-[95%] xl:left-[96%] cursor-pointer  w-[37px] h-[37px] bg-white rounded-full border
                border-neutral-200 flex justify-center items-center" onClick={() => close()}>
                 <Image src={halfScreenIcon} />
               </span>
                  </div>
                )}
              </Popup>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images &&  images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentImage ? 'bg-[#131C5F]' : 'bg-gray-300'
            }`}
          >{""}</button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
