import React from 'react';
import Nav from './Nav.js';
import InputName from './components-home/InputName.js';
import Content from './components-home/Content.js';
import LandScape from './components-home/LandScape.js';
import Snow from './components-home/Canvas.js';

import {
  Link,
} from "react-router-dom";


import './App.css';

class Home extends React.Component {
	state = { name: ''};

		// allow to communicate with children component
	onNameSubmit = async (input) => { // async key word to use Async Await syntaxe
	  this.setState({name: input});
	}
    
    render() {
      return (
        <div className="container">
		  <InputName onSubmit={this.onNameSubmit}/>
		  <Content name={this.state.name}/>
		  <LandScape name={this.state.name}/>
          <div className="nav"></div>
          <Nav name={this.state.name}/>
          <Snow/>
	    </div> 
	  )
    }
}

export default Home;
	
