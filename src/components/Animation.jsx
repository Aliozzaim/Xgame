/* eslint-disable */
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation/EmailAnimation.json";

const Animation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Animation;
