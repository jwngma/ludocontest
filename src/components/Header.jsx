import React from "react";
import About from "./About";
import Contact from "./Contact";
import Feature from "./Feature";
import Navbar from "./Navbar";
import download1 from "../images/dashboard.jpg";

function Header() {
  return (
    <div id="header">
      <div id="main">
        <Navbar />
        <div className="name">
          <h1>
            <span>Play Ludo Contest</span> With Confidence and Earn cash Reward
            Instantly
          </h1>
          <p className="details">
            100% Trusted Ludo Contest App. We provide Ludo Betting Contest
            <span> 24*7</span>. Download the App. And Join Contest of Your
            Choice!
            <span>Winners are paid Instantly by upi address</span>.
          </p>

          <a
            href="https://onedrive.live.com/download?cid=760E907CD0C87FAD&resid=760E907CD0C87FAD%212043&authkey=AIcdL35C_pTc6mM"
            className="cv-btn"
          >
            Download
          </a>
        </div>
      </div>
      <Feature />
      {/* <Presentation /> */}
      <About
        image={download1}
        title="Download And Get The App Now"
        button="Get The App"
      />
      <Contact />
    </div>
  );
}

export default Header;
