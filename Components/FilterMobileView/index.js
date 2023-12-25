import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [priceSliderVisible, setPriceSliderVisible] = useState(true);
  const [ratingSliderVisible, setRatingSliderVisible] = useState(true);
  const [selectedRating, setSelectedRating] = useState(5);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const handleApplyFilter = () => {
    // Handle applying filter with minValue and maxValue
    console.log('Applying filter:', minValue, maxValue);
    console.log('Selected Rating:', selectedRating);
  };

  const togglePriceSliderVisibility = () => {
    setPriceSliderVisible(!priceSliderVisible);
  };

  const toggleRatingSliderVisibility = () => {
    setRatingSliderVisible(!ratingSliderVisible);
  };

  return (
    <div className="price-filter-container p-4 border border-gray-300 rounded m-3" style={{ width: "500px" }}>
      <div className="slider-header-container mb-2 flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-600">Price Range</label>
        <button className="caret-button" onClick={togglePriceSliderVisibility}>
          {priceSliderVisible ? '˅' : '^'}
        </button>
      </div>

      {priceSliderVisible && (
        <Slider
          range
          min={0}
          max={1000}
          value={[minValue, maxValue]}
          onChange={handleSliderChange}
          style={{
            track: { backgroundColor: 'blue' },
            handle: { borderColor: 'blue', backgroundColor: 'white' },
          }}
        />
      )}

      {priceSliderVisible && (
        <div className="min-max-boxes flex justify-between mb-4">
          <div className="flex flex-col items-center">
            <label className="text-xs font-medium text-gray-600 mb-1">Min</label>
            <div className="value-box rounded border border-gray-300 p-2" style={{ width: "50px" }}>{minValue}</div>
          </div>
          <div className="flex flex-col items-center">
            <label className="text-xs font-medium text-gray-600 mb-1">Max</label>
            <div className="value-box rounded border border-gray-300 p-2" style={{ width: "50px" }}>{maxValue}</div>
          </div>
        </div>
      )}

      <div className="apply-button-box flex justify-center">
        <button
          className="bg-white border border-gray-400 text-blue-500 hover:bg-gray-100 hover:border-gray-500 hover:text-blue-700 font-bold py-2 rounded"
          onClick={handleApplyFilter}
          style={{ width: "250px" }}
        >
          Apply
        </button>
      </div>
      <hr className="border-t border-gray-300 my-4" />

      <div className="slider-header-container mb-2 flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-600">Ratings</label>
        <button className="caret-button" onClick={toggleRatingSliderVisibility}>
          {ratingSliderVisible ? '˅' : '^'}
        </button>
      </div>

      {ratingSliderVisible && (
        <div className="rating-selector">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="rating-checkbox flex">
              <input
                type="checkbox"
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
              />
              {[...Array(rating)].map((_, index) => (
                <span key={index} role="img" aria-label="star" className={`star ${index < selectedRating ? 'glowing' : ' '}`} style={{textColor:"grey"}}>⭐</span>
              ))}
      
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
