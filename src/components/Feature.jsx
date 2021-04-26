import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage1 from "../images/participate.jpg";
import featureimage2 from "../images/upload_proof.jpg";
import featureimage3 from "../images/result.jpg";

function Feature() {
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="a-container">
        <FeatureBox
          image={featureimage1}
          title="Join Contest"
          desc="Join Ludo COntest of Your Choice"
        />
        <FeatureBox
          image={featureimage2}
          title="Play Your Contest"
          desc=" play Ludo Contest 24*7"
        />
        <FeatureBox
          image={featureimage3}
          title="Check Result"
          desc="Check result with winning proof"
        />
      </div>
    </div>
  );
}

export default Feature;
