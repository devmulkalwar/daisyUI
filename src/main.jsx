// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';

import Hero from './Pages/Hero';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import ResetPassword from './Pages/ResetPassword';
import Home from './Pages/Home';
import Material from './Pages/Material';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },      
      {
        path: 'material',
        element: <Material />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
);