import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Content.css';

function Content({name}) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
  	let sections = gsap.utils.toArray(".display-content");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: '.content-container',
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
       end: () => "+=" + document.querySelector(".content-container").offsetWidth
      }
    });
  }, []);

 const contentToRenderOne = () => {
 	if (name !== '') {
 	  return (
 	  	<div className="first-content">
          <p>Hello <span className='key-word-blank'>{name}</span>, welcome on my WebSite !</p>
          <p><span className='key-word'>Scroll Down</span> to know more about me.</p>
        </div>
 	  )
    }
  }

  const contentToRenderTwo = () => {
 	if (name !== '') {
 	  return (
 	  	<div>
          <p>Cool <span className='key-word-blank'>{name}</span> I’m happy to see you curious !  </p>
          <p>Continue to <span className='key-word-blank'>Scroll</span>, I love talking !</p>
        </div>
 	  )
    }
   }

   const contentToRenderThree = () => {
 	if (name !== '') {
 	  return (
 	  	<div>
          <p>Just graduated from <span className='key-word'>ESSCA</span> Business School, </p>
          <p>I had so many opportunities during my scolarship :</p>
        </div>
 	  )
    }
   }

    const contentToRenderFour = () => {
 	if (name !== '') {
 	  return (
 	  	<div>
          <p>Just graduated from <span className='key-word'>ESSCA</span> Business School, </p>
          <p>I had so many opportunities during my scolarship :</p>
        </div>
 	  )
    }
 }

    return (
    <div className='content-container'>
      <div  className='display-content one'>
         <div className="scroll-one">
          {contentToRenderOne()}
         </div>
      </div>
      <div  className='display-content two'>
        <div className="scroll-two">
          {contentToRenderTwo()}
        </div>
      </div>
      <div  className='display-content three'>
        <div className="scroll-three">
          {contentToRenderThree()}
        </div>
      </div>
      <div  className='display-content four'>
        <div className="scroll-three">
          {contentToRenderFour()}
        </div>
      </div>
    </div>
    )
}

export default Content;