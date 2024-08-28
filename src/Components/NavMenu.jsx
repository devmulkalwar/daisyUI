import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";

const NavMenu = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(true);
  return (
    <details className="dropdown lg:hidden">
        <HamburgerButton/>  
      <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Materials</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        {!isAuthenticated && (
          <li>
            <a>Login</a>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <a>SignUp</a>
          </li>
        )}
      </ul>
    </details>
  );
};

export default NavMenu;
