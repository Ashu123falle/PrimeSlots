import React from 'react';
import FilterComponent from './FilterComponent/FilterComponent';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import ServiceSection from "@/Components/ServicesSection";
const optionsConfig = [
  {
    key: 'state',
    label: 'Search Location',
    options: ['All', 'Andhra Pradesh', 'Assam', 'Arunachal Pradesh'], // Add more states as needed
    default: 'All',
  },
  {
    key: 'category',
    label: 'Media Categories',
    options: ['All', 'category1', 'category2', 'category3'], // Add more categories as needed
    default: 'All',
  },
  {
    key: 'filter',
    label: 'Filters',
    options: ['All', 'filter1', 'filter2', 'filter3'], // Add more filters as needed
    default: 'All',
  },
];
// Example data
const data = [
  
  //our data items
];

const Home = () => {
  return (
    <div >
      <Navbar/>
      <FilterComponent data={data} optionsConfig={optionsConfig}/>
      <ServiceSection />
      <Footer/>
    </div>
  );
};

export default Home;
