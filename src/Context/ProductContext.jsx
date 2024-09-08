// src/context/ProductContext.js
import React, { createContext, useContext, useState } from 'react';
import { topSellingProduct } from '../Components/HOME/DummyData/topSellingProduct.js';

// Create the context
const ProductContext = createContext();

// Create a custom hook to use the ProductContext
export const useProducts = () => {
  return useContext(ProductContext);
};

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [products] = useState(topSellingProduct); // Initialize products state

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
