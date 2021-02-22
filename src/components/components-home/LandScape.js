import { useEffect } from "react";
import LottieAnimation from './Lottie';
import home from '../../lotties/biker.json';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import './landscape.css'



const LandScape = ({name}) => {
	gsap.registerPlugin(ScrollTrigger);

   // useEffect(() => {
    gsap.to(".mountain-container", {
        scrollTrigger: {
          start: 0,
          end: () => ScrollTrigger.maxScroll("html"),
          scrub: 1,
          // toggleActions: "play pause reverse pause"
        },
        x: -100,
        ease: "none",
        duration: 2,
      })
    // }, []);

    // useEffect(() => {
      gsap.to(".container-hill", {
        scrollTrigger: {
          start: 0,
          end: () => ScrollTrigger.maxScroll("html"),
          scrub: 1,
          // toggleActions: "play pause reverse pause"
        },
        x: -200,
        ease: "none",
        duration: 2,
      })
  // }, []);

    const contentToRenderMountain = () => {
 	  if (name !== '') {
 	    return (
 	      <div className="background-mountain"> </div>	
 	    )
 	  }
 	}

 	const contentToRenderHill = () => {
 	  if (name !== '') {
 	    return (
 	      <div className="background-hill"> </div>	
 	    )
 	  }
 	}
 	const contentToRenderBackground = () => {
 	  if (name !== '') {
 	    return (
 	      <div>	
	  	    <div className="background-one"></div>
	  	    <div className="background-two"></div>
	  	  </div>
 	    )
 	  }
 	}
 	const contentToRenderLottie = () => {
 	  if (name !== '') {
 	    return (
 	      <div className="lottie-biker">
 	        <LottieAnimation lotti={home} height={250} width={250} speedAnim={1} />
 	      </div>	
 	    )
 	  }
 	}

	return (
	  <div>
	  	<div className="mountain-container">
          {contentToRenderMountain()}
	  	</div>
	  	<div className="container-hill">
	  	  {contentToRenderHill()}
	  	</div>
	  	<div className="background-container">
	  	  {contentToRenderBackground()}
	  	</div>
	  	<div className="lottie-container "data-speed="1">
	  	  {contentToRenderLottie()}
	  	</div> 	
	  </div>
	)
}

export default LandScape;