import React from "react";
import Header from './Components/NAVBAR/Header';
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Login from "./Pages/Login";
import ProductCard from "./Components/ProductCard";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import OTPPage from "./Pages/OTPPage";
import { Outlet } from 'react-router-dom';
 
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
