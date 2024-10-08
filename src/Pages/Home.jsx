import React from 'react';
import SearchInput from '../Components/HOME/SearchInput';
import HomeCarousel from '../Components/HOME/HomeCarousel';
import TrendingCategories from '../Components/HOME/TrendingCategories';
import HeroBanner from '../Components/HOME/HeroBanner';
import FeaturedProducts from '../Components/HOME/FeaturedProducts';
import AdBanner from '../Components/HOME/AdBanner';
import TopSellers from '../Components/HOME/TopSellers';
import { ProductProvider } from '../Context/ProductContext.jsx';
import { FeaturedProductProvider } from '../Context/FeaturedProductContext.jsx';

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-full overflow-hidden">
      <HeroBanner />
      <SearchInput />
      <TrendingCategories />

      <FeaturedProductProvider>
        <FeaturedProducts />
      </FeaturedProductProvider>
      
      {/* Advertisement section */}
      <div className="relative w-full h-96 bg-cover bg-right md:lg:xl:bg-center bg-[url('https://images.unsplash.com/photo-1571597438372-540dd352bf41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center text-center text-white overflow-hidden rounded-md"></div>
      <AdBanner />

      <ProductProvider>
        <TopSellers />
      </ProductProvider>

      <div className="lg:divider"></div>
      <HomeCarousel category="Plastics" />
      <HomeCarousel category="Electric Components"/>
      <HomeCarousel category="Leathers"/>
      <HomeCarousel category="Wooden tables"/>
    </div>
  );
};

export default Home;
