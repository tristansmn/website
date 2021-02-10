import React from 'react';

import './inputName.css';

 

class InputName extends React.Component {
  state = {name: ''}; 

  onFormSubmit = event => { 
    event.preventDefault(); 
    this.props.onSubmit(this.state.name) 
  }

  render() {
    return (
      <div className="container-form">
        <form className='form' onSubmit={this.onFormSubmit}>
            <label>Please, enter your <span className='key-word'>Name</span></label>
            <input className='name-input'
                type="text" 
                placeholder="Your Name"
                autoFocus="autofocus"
                value={this.state.name} // use this to have controlled component, the component is stored on react world
                onChange={e => this.setState({name: e.target.value})}  
            /> 
            <button className='name-button' type="submit">Let's begin !</button>
        </form>
      </div>  
    )
  }
}

export default InputName;