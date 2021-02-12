import React from 'react';
import { CSSTransition } from "react-transition-group";
import './inputName.css';

 

class InputName extends React.Component {
  state = {name: '', showForm: true, error: ''}; 
  

  onFormSubmit = event => { 
    event.preventDefault();

    if(this.validateName()){
      console.log(this.state)
      this.props.onSubmit(this.state.name) 
    }  
  };

  
  validateName() {
    const pattern = /^[a-zA-Z]+$/
    let isValid = true

    if (this.state.name !== '') {
      if (!pattern.test(this.state.name)) {
        isValid = false;
        this.setState({ error: "Please, enter a valid name."});
      }
    } else if (this.state.name === '') {
      isValid = false;
      this.setState({ error: "Please, enter a name."});
    }

    return isValid
  };

  switch = () => {
    if (this.validateName()) {        
      this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
    }

  };

  render() {
    return (
      <CSSTransition in={this.state.showForm} 
                     timeout={300}
                     classNames="list-transition"
                     unmountOnExit
                     appear>
        <div className="container-form">
          <form className='form' onSubmit={this.onFormSubmit}>
              <label>Please, enter your <span className='key-word'>Name</span></label>
              <div className="input-error-container">
              <input className='name-input'
                  type="text" 
                  placeholder="Your Name"
                  maxLength='15'
                  autoFocus="autofocus"
                  value={this.state.name} // use this to have controlled component, the component is stored on react world
                  onChange={e => this.setState({name: e.target.value})}  
              /> 
               <div className="error-message">{this.state.error}</div>
              </div>
              <button className='btn button-principal form-button' type="submit" onClick={this.switch}>LET'S GO</button>
          </form>
        </div> 
      </CSSTransition>
    )
  }
}

export default InputName;