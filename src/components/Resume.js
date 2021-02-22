import { useRef, useEffect } from "react";
import React from 'react';
import Snow from './components-home/Canvas.js'
import './Resume.css';
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Resume() {
      return (
        <div>
        <div className="container-resume">
        <div className="grid-container">

		  <div className="grid-item-one left">
			  <div className="container-timeline">
				  <div className="timeline"></div>
				  <div className="point point-one"></div>
				  <div className="point point-two"></div>
			  </div>
			  <div className="container-date">
			    <div className="date date-one">2014</div>
			    <div className="date date-two">2021</div>
			  </div>
		  </div>

		  <div className="grid-item-two right"></div>

		  <div className="grid-item-three top">
		    <div className="container-title">
		      <div className="container-title">
		       <div className="title name"><span>Tristan Simon</span></div>
		       <div className="sub-title">Looking for an opportunity as Junior Web Developer</div>
		      </div>
		    </div>
		  </div>

		  <div className="grid-item-four bottom"></div>

		  <div className="grid-item-five center-left">
		    <div className="container-info">
		      <div className="info">HOVER ME</div>
		      <div className="background-info"></div>
		      <div className="hidden-info"></div>
		    </div>
		    <div className="container-list">
			    <ul className="experiences-list">
			      <li>Eudonet CRM</li>
			      <li>Siam New Networks</li>
			      <li>Advolis</li>
			      <li>KPMG</li>
			      <li>Oderis</li>
			      <li>Hivest Capital Partners</li>
			    </ul>
		    </div>
		  </div>

		  <div className="grid-item-six center-center"></div>

		  <div className="grid-item-seven center-right-top">
		    <div className="title border">Stack</div>
		  </div>

		  <div className="grid-item-height center-right-middle">
		    <div className="title border">Education</div>
		    <div className="container-education">
		      <div className="container-timeline-horizontal">
				<div className="timeline-horizontal"></div>
				<div className="point point-three"></div>
				<div className="point point-four"></div>
				<div className="date date-three">2021</div>
			    <div className="date date-four">2014</div>
			    <div className="educ educ-one">Le Wagon</div>
			    <div className="educ educ-two">ESSCA</div>
		      </div>
			</div>
		  </div>

		  <div className="grid-item-nine center-right-bottom">
		    <div className="title border">Contact</div>
		    <div className="container-contact">
		      <ul>
		      	<li>Mail: <span>tristan.simon1@outlook.fr</span></li>
		      	<li>Num: <span>+33 6 77 39 55 84 </span></li>
		      </ul>
		    </div>
		  </div>

		  <div className="grid-item-ten left">
		  <div className="container-animation">
		    <div className="animation">Hello</div>
		    <div className="animation"></div>
		    <div className="animation"></div>
		    <div className="animation"></div>
		    <div className="animation"></div>
		    <div className="animation"></div>
		  </div>
		  </div>
		</div>
		<Snow/>
	   </div>
	   </div>
	  )
}

export default Resume;