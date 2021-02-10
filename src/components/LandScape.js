import React from 'react';
import LottieAnimation from './Lottie';
import home from '../lotties/biker.json';

import './landscape.css'

const LandScape = ({name}) => {

	if (name === '') {
	return <div></div>
    }

    return (
      <div>
      	<div className="mountain-background"></div>
      	<div className="hill-background"></div>
      	<div className="background-one"></div>
      	<div className="background-two"></div>
      	<div className='lottie-biker'>
      	  <LottieAnimation  lotti={home} height={250} width={250} />
      	</div>
      </div>
    )
}

export default LandScape;