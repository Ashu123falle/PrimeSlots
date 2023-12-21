
import React, { useState } from 'react';

const FilterComponent = ({ data }) => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredData = data.filter(
    (item) =>
      (selectedState === 'all' || item.state === selectedState) &&
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      (selectedFilter === 'All' || item.filter === selectedFilter)
  );

  return (
    <div className=' text-white'>
      <div className='flex m-11 space-x-4 rounded p-3' style={{ backgroundColor: '#242565' }}>
        {/* Indian States dropdown */}
        <div className='flex flex-1 flex-col  p-5'>
          <label htmlFor='indianStates'>Search Location:</label>
          <select
            id='indianStates'
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className='text-black bg-white'
          >
            <option value='all'>All States</option>
            <option value='Andhra Pradesh'>Andhra Pradesh</option>
            <option value='Assam'>Assam</option>
            <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
            {/* Add more states as needed */}
          </select>
        </div>

        {/* Media Categories dropdown */}
        <div className='flex flex-1 flex-col p-4 '>
          <label htmlFor='mediaCategories'>Media Categories:</label>
          <select
            id='mediaCategories'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='text-black bg-white'
          >
            <option value='All'>All Categories</option>
            <option value='category1'>Category 1</option>
            <option value='category2'>Category 2</option>
            <option value='category3'>Category 3</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Filters dropdown */}
        <div className='flex flex-1 flex-col  p-4 '>
          <label htmlFor='filters'>Filters:</label>
          <select
            id='filters'
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className='text-black bg-white'
          >
            <option value='All'>All Filters</option>
            <option value='filter1'>Filter 1</option>
            <option value='filter2'>Filter 2</option>
            <option value='filter3'>Filter 3</option>
            {/* Add more filters as needed */}
          </select>
        </div>
      </div>
      {/* Display results here */}
      <div className='text-black m-8'>
        {filteredData.map((item) => (
          <div key={item.title}>
            {item.title} - {item.state} - {item.category} - {item.filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
