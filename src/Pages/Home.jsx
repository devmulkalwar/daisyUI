import React from 'react'
import SearchInput from '../Components/HOME/SearchInput'
import HomeCarousel from '../Components/HOME/HomeCarousel'
import TrendingCategories from '../Components/HOME/TrendingCategories'

const Home = () => {
  return (
    <div className='flex flex-grow flex-col '>
  
      <SearchInput/>
      <TrendingCategories/>
   
      <HomeCarousel/>

    </div>
  )
}

export default Home