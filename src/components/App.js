import React from 'react';
import { render } from 'react-dom';
import { 
  Route, 
  Switch, 
  BrowserRouter,
} from 'react-router-dom';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';
import Home from './Home.js'
import Resume from './Resume.js'

import './App.css';


class App extends React.Component {
	state = { name: ''};

	// allow to communicate with children component
	onNameSubmit = async (input) => { // async key word to use Async Await syntaxe
	  this.setState({name: input});
	}

	render () {
	  return (
	   <BrowserRouter>
	  	<main>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/resume"
              component={Resume}
            />
          </Switch>
          
        </main>
       </BrowserRouter>
	  	
	  ) 
	}
}

export default App;