import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#f00946'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="navbar-icon" />
            Redify
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/*<li className="nav-item">
              <Link to="/usecase" className="nav-links" onClick={closeMobileMenu}>
                Use Case
              </Link>
            </li>*/}
            <li className="nav-item">
              <Link to="/clean_brand" className="nav-links" onClick={closeMobileMenu}>
                Clean Brand
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/collaborate" className="nav-links" onClick={closeMobileMenu}>
                Collaborate
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            
            <li className="nav-btn">
              {button ? (
                <a href="https://registration-redify.web.app/" className="btn-link">
                  <Button buttonStyle="btn--outline">Log In</Button>
                </a>
              ) : (
                <a href="https://registration-redify.web.app/" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Log In
                  </Button>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
