import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    name: '',
    email: ''
  }

  handleInput = (event) => {
    //console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    });

    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const data = this.state;

    fetch('http://localhost:8080', {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json',
        "access-control-allow-origin": "*"
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

  }

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input name="name" onChange={this.handleInput}/>
          <br />
          <label>Email:</label>
          <input name="email" onChange={this.handleInput}/>
          <br />
          <button type="submit">Submit</button>
        </form> 
      </div>
          
    );
  }
}

export default App;
