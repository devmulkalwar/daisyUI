import React from "react";
import Header from './Components/NAVBAR/Header';
import Footer from "./Components/Footer";
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
