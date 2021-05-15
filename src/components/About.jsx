import React from "react";
import dashboard from "../images/dashboard.jpg";
function About(props) {
  return (
    <div className="aboutt">
      <h1>Download The App</h1>
      <div id="about">
        <div className="about-image">
          <img src={dashboard} alt="" srcset="" />
        </div>
        <div className="about-text">
          <h2>{props.title} </h2>
          <p>Download the App Now And join Ludo betting Contest Right now</p>

          <button>
            <a href="https://onedrive.live.com/embed?cid=760E907CD0C87FAD&resid=760E907CD0C87FAD%212045&authkey=AJiJyzgmV6Mn_KQ">
              {props.button}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
