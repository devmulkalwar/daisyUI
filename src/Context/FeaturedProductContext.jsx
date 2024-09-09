import React, { createContext, useContext, useState } from 'react'
import { featuredProducts } from '../Components/HOME/DummyData/featuredProducts';

const FeaturedProductContext = createContext();

// Create a custom hook to use the ProductContext
export const useProducts = () => {
  return useContext(FeaturedProductContext);
};

// Create a provider component
export const FeaturedProductProvider = ({children}) => {
    const [products] = useState(featuredProducts); // Initialize products state

    return (
        <FeaturedProductContext.Provider value={{ products }}>
            {children}
        </FeaturedProductContext.Provider>
    );
}