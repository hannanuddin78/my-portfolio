import React from "react";
import hannan from "../../../../image/hannan-uddin-web-developer.jpg";

const WhoAmI = () => {
  return (
    <div className="text-center">
      <img className="mb-3 own-img" src={hannan} alt="" />
      <h1>Who's this guy?</h1>
      <p>
        Hi, I am a Full Stack Web Developer. Experience work with both the front and back ends
        building website or web application. Take a lokk at my work or if you have a project I can
        help with, Please get in touch!
      </p>
    </div>
  );
};

export default WhoAmI;
