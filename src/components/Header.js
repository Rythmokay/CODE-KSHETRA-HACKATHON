// Header.js
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import About from "../Pages/About";
import Appointments from "../Appointments";
function Header() {
  useEffect(() => {
    // Navbar toggling logic
    const navbarShowBtn = document.querySelector(".navbar-show-btn");
    const navbarCollapseDiv = document.querySelector(".navbar-collapse");
    const navbarHideBtn = document.querySelector(".navbar-hide-btn");

    const handleNavbarShow = () => {
      navbarCollapseDiv.classList.add("navbar-show");
    };

    const handleNavbarHide = () => {
      navbarCollapseDiv.classList.remove("navbar-show");
    };

    navbarShowBtn.addEventListener("click", handleNavbarShow);
    navbarHideBtn.addEventListener("click", handleNavbarHide);

    // Changing search icon image on window resize
    const changeSearchIcon = () => {
      const searchIconImg = document.querySelector(".search-icon img");
      const winSize = window.matchMedia("(min-width: 1200px)");

      if (winSize.matches) {
        searchIconImg.src = "/images/search-icon.png";
      } else {
        searchIconImg.src = "/images/search-icon-dark.png";
      }
    };

    window.addEventListener("resize", changeSearchIcon);
    changeSearchIcon(); // Initial call to set the correct image on load

    // Cleanup logic
    return () => {
      navbarShowBtn.removeEventListener("click", handleNavbarShow);
      navbarHideBtn.removeEventListener("click", handleNavbarHide);
      window.removeEventListener("resize", changeSearchIcon);
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <header className="header bg-blue">
      <nav className="navbar bg-blue">
        <div className="container flex">
          <NavLink to="/Home" className="navbar-brand">
            <img src="/images/logo.png" alt="site logo" />
          </NavLink>
          <button type="button" className="navbar-show-btn">
            <img src="/images/ham-menu-icon.png" alt="menu icon" />
          </button>

          <div className="navbar-collapse bg-white">
            <button type="button" className="navbar-hide-btn">
              <img src="/images/close-icon.png" alt="close icon" />
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/Home" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Services" className="nav-link">
                  Departments
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Appointments" className="nav-link">
                  Appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">
                  <button>Signup</button>
                </NavLink>
              </li>
              {/* Add other NavLink components as needed */}
            </ul>
            <div className="search-bar">
              <form>
                <div className="search-bar-box flex">
                  <span className="search-icon flex">
                    <img src="/images/search-icon-dark.png" alt="search icon" />
                  </span>
                  <input
                    type="search"
                    className="search-control"
                    placeholder="Search here"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-inner text-white text-center">
        <div className="container grid">
          <div className="header-inner-left">
            <h1>
              Your most trusted
              <br />
              <span>health partner</span>
            </h1>
            <p className="lead">The best match services for you</p>
            <p className="text text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
              nulla odit esse necessitatibus corporis voluptatem?
            </p>
            <div className="btn-group">
              <a href="#" className="btn btn-white">
                Learn More
              </a>
              <a href="#" className="btn btn-light-blue">
                Sign In
              </a>
            </div>
          </div>
          <div className="header-inner-right">
            <img src="/images/header.png" alt="header image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
