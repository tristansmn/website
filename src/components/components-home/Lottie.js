import React from "react";
import Lottie from "react-lottie";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const LottieAnimation = ({ lotti, width, height, speedAnim }) => {

  let defaultOptions = {
    loop: true,
    autoplay: true,
    speed: speedAnim,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  };

  

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} speed={speedAnim} />
    </div>
  );
};

export default LottieAnimation;