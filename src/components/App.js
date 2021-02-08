import React from 'react';
import InputName from './InputName.js';
import Name from './Name.js';


class App extends React.Component {
	state = { name: ''};

	// allow to communicate with children component
	onNameSubmit = async (input) => { // async key word to use Async Await syntaxe
	  this.setState({name: input});
	}

	render () {
	  return (
	  	<div>
		    <div className="ui container" style={{marginTop: '10px'}}>
		      <InputName onSubmit={this.onNameSubmit}/>
		      <Name name={this.state.name}/>
		    </div> 
	    </div>
	  ) 
	}
}

export default App;