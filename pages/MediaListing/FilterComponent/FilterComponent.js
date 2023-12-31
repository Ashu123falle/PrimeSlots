import React, { useState } from 'react';
import Select from 'react-select';

const FilterComponent = ({ data, optionsConfig }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    Object.fromEntries(optionsConfig.map((option) => [option.key, option.default]))
  );
  
  const filteredData = data.filter((item) =>
    optionsConfig.every((option) => selectedOptions[option.key] === 'All' || item[option.key] === selectedOptions[option.key])
  );

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      backgroundColor: '#242565',
      borderBottom: '1px solid white',
      outline: 'none',
      boxShadow: 'none', // Remove box shadow
      '&:hover': {
        borderBottom: '1px solid white', // Keep the border when hovering
      },
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
      borderBottom: '1px solid white'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'white', // Set the color to white
      '&:hover': {
        color: 'gray', // Remove hover effect
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white', }),
      indicatorSeparator: () => ({
        display: 'none', // Remove the separator line
      }),
      
  };

  return (
    <div className='text-white mx-4 sm:mx-10 md:mx-13 lg:mx-16 max-w-[1450px]'>
      <div className='flex flex-col md:flex-row m-7 space-y-4 md:space-y-0 md:space-x-4 rounded p-3 ' style={{ backgroundColor: '#242565',
      borderRadius: '20px' }}>
        {optionsConfig.map((option) => (
          <div key={option.key} className='flex flex-1 flex-col p-2 md:p-5 text-[16px]'>
            <label htmlFor={option.key}>{option.label}</label>

            <Select
              id={option.key}
              value={{ label: selectedOptions[option.key], value: selectedOptions[option.key] }}
              onChange={(selectedOption) => setSelectedOptions({ ...selectedOptions, [option.key]: selectedOption.value })}
              options={option.options.map((opt) => ({ label: opt, value: opt }))}
              styles={customStyles}
              isSearchable={false} 
            />
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
