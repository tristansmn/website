import React from 'react';
import './inputName.css';

 

class InputName extends React.Component {
  state = {name: ''}; // this is an object

  onFormSubmit = event => { // Arrow function here allows to bind "this" ES6 
    event.preventDefault(); // to prevent automic submit
    this.props.onSubmit(this.state.name) // props.onSubmit refer to SearchBar in App component
  }

  render() {
    return (
      <div className="container-form">
        <form className='form' onSubmit={this.onFormSubmit}>
            <label>Please, enter your <span className='key-word'>Name</span></label>
            <input className='name-input'
                type="text" 
                placeholder="Your Name"
                autofocus="autofocus"
                value={this.state.name} // use this to have controlled component, the component is stored on react world
                onChange={e => this.setState({name: e.target.value})}  
            /> 
            <button className='name-button' type="submit">Let's begin</button>
        </form>
      </div>  
    )
  }
}

export default InputName;