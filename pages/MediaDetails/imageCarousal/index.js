import { useState, useEffect } from 'react';

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
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="w-full flex transition-transform duration-500 transform"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
         { images && images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-t-md "
              style={{ backgroundImage: `url(${image})` }}
            ></div>
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
