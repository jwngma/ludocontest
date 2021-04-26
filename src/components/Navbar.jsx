import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo">
          <h2>Ludo Contest App</h2>
          {/* <img src={logo} alt="" /> */}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>

        <ul className="menu">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/features"> Features</Link>
          </li>
          <li>
            <Link to="/presentation"> Presentation</Link>
          </li>
          <li>
            <Link to="/download"> Download</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
