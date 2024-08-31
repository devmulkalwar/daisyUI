import React from "react";
// import HamburgerButton from "./NAVBAR/HamburgerButton";
import { Link } from "react-router-dom";

const NavMenu = ({isAuthenticated, classes}) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  const routes = [
    {
      name: "Home", to:""
    },
    {
      name: "Materials", to: "/materials"
    },
    {
      name: "Services", to: "/services"
    },
    {
      name: "About", to: "/about"
    },
    {
      name: "Contact", to: "/contact"
    }

  ]
  
  const renderLinks = (routes) => {
    return routes.map((route, index) => (
      <li key={index}>
        <Link to={route.to}>{route.name}</Link>
      </li>
    ));
  }

  return (
    <ul className={classes}>
      
      {renderLinks(routes)}

        {!isAuthenticated && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        )}
      </ul> 
  );
};

export default NavMenu;
