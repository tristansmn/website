import React from 'react';
import './App.css';
import InputName from './InputName.js';
import Content from './Content.js';
import LandScape from './LandScape.js';


class App extends React.Component {
	state = { name: ''};

	// allow to communicate with children component
	onNameSubmit = async (input) => { // async key word to use Async Await syntaxe
	  this.setState({name: input});
	}

	render () {
	  return (
	  	<div>
		    <div className="container">
		      <InputName onSubmit={this.onNameSubmit}/>
		      <Content name={this.state.name}/>
		      <LandScape name={this.state.name}/>
		    </div> 
	    </div>
	  ) 
	}
}

export default App;