import React, { useState } from 'react';

const FilterComponent = ({ data, optionsConfig }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    Object.fromEntries(optionsConfig.map((option) => [option.key, option.default]))
  );

  const filteredData = data.filter((item) =>
    optionsConfig.every((option) => selectedOptions[option.key] === 'All' || item[option.key] === selectedOptions[option.key])
  );

  return (
    <div className='text-white mx-10'>
      <div className='flex flex-col md:flex-row m-7 space-y-4 md:space-y-0 md:space-x-4 rounded p-3' style={{ backgroundColor: '#242565' }}>
        {optionsConfig.map((option) => (
          <div key={option.key} className='flex flex-1 flex-col p-2 md:p-5 text-[16px]'>
            <label htmlFor={option.key}>{option.label}</label>

            <select
              id={option.key}
              value={selectedOptions[option.key]}
              onChange={(e) => setSelectedOptions({ ...selectedOptions, [option.key]: e.target.value })}
              className='text-white border-b text-[16px] font-bold '
              style={{ backgroundColor: '#242565' }}
            >
              {option.options.map((opt) => (
                <option key={opt} value={opt} className=' text-black bg-white text-[16px]'>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {/* Display results here */}
      <div className='text-black m-8'>
        {filteredData.map((item) => (
          <div key={item.title} className='mb-2'>
            {item.title} - {item.state} - {item.category} - {item.filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
