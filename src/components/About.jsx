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
            <a href="https://docs.google.com/uc?export=download&id=1fuIcyjUMNVCOEfE8AQgigEZ6RvAT4AOr">
              {props.button}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
