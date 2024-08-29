import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Login from "./Pages/Login";
import ProductCard from "./Components/ProductCard";
import Profile from "./Pages/Profile";
 
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-grow">
        {/* <Hero/> */}
        {/* <Login/> */}
        {/* <ProductCard/> */}
        <Profile/>

      </main>
      <Footer/>
    </div>
  );
}

export default App;
