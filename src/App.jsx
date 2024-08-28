import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Login from "./Pages/Login";
 
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-grow">
        {/* <Hero/> */}
        <Login/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
