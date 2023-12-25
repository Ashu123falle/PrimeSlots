import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const handleApplyFilter = () => {
    // Handle applying filter with minValue and maxValue
    console.log('Applying filter:', minValue, maxValue);
  };

  return (
    <div className="price-filter-container p-4 border border-gray-300 rounded">
      <div className="slider-container mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Price Range</label>
        <Slider
          range
          min={0}
          max={1000}
          value={[minValue, maxValue]}
          onChange={handleSliderChange}
        />
      </div>

      <div className="min-max-boxes flex justify-between mb-4">
        <div className="flex flex-col items-center">
          <label className="text-xs font-medium text-gray-600 mb-1">Min</label>
          <div className="value-box rounded border border-gray-300 p-2">
            {minValue}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-xs font-medium text-gray-600 mb-1">Max</label>
          <div className="value-box rounded border border-gray-300 p-2">
            {maxValue}
          </div>
        </div>
      </div>

      <div className="apply-button-box">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleApplyFilter}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
