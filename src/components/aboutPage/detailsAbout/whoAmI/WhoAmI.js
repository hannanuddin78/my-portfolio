import React from "react";
import hannan from "../../../../image/hannan-uddin-web-developer.jpg";

const WhoAmI = () => {
  return (
    <div className="text-center">
      <img className=" own-img" src={hannan} alt="" />
      <h1>Who's this guy?</h1>
      <p>
        I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have serious passion for UI
        effects, animations and creating intuitive, dynamic user experiences. Let's make something
        special.
      </p>
    </div>
  );
};

export default WhoAmI;
