import React from 'react';
import SearchInput from '../Components/HOME/SearchInput';
import HomeCarousel from '../Components/HOME/HomeCarousel';
import TrendingCategories from '../Components/HOME/TrendingCategories';

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-full overflow-hidden">
      <SearchInput />
      <TrendingCategories />
      <div className='w-full h-96 bg-blue-300 rounded-md'></div>
      <div className='lg:divider'></div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
