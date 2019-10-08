import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //Class allows you to use state and lifecycle methods vs functional that does not

  state = {
    todos: [],
    message: ''
  }

render(){
  return(
    <div>FS Todo App</div>
    )
  
  }

}

export default App;
