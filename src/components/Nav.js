import React from "react";
import Link from 'react-router-dom/Link';


const Nav = ({name}) => {
	console.log(name)

  const contentToRender = () => {
	if (name !== '') {
	    return (
	 	  <div className="btn button-principal resume-button">
			<Link 
	          to='/resume'
	          label='Resume'
	        >
	        RESUME
	        </Link>
	     </div>	
	    )
    }
  }

    return ( 
      <div className="container-resume">
        {contentToRender()}
      </div>
    )       
}

export default Nav;