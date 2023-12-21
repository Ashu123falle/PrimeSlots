import React from 'react';
import FilterComponent from './FilterComponent/FilterComponent';

// Example data
const data = [
  { title: 'Result 1', state: 'Andhra Pradesh', category: 'Category 1', filter: 'Filter 1' },
  { title: 'Result 2', state: 'Assam', category: 'Category 2', filter: 'Filter 2' },
  { title: 'Result 3', state: 'Arunachal Pradesh', category: 'Category 1', filter: 'Filter 3' },
  // Add more data as needed
];

const Home = () => {
  return (
    <div>
      <FilterComponent data={data} />
    </div>
  );
};

export default Home;
