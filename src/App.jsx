import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/NAVBAR/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex flex-grow overflow-auto">
        <Outlet />
      </main>
      {path === '/material' ? null : <Footer />}
    </div>
  );
}

export default App;
