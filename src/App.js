import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  //Class allows you to use state and lifecycle methods vs functional that does not

  state = {
    todos: [],
    message: ''
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/message')
      .then((res) => {
        this.setState({ message: res.data } )
      })
  }

  render(){
  return(
    <Fragment>
      <div>FS Todo App</div>
      <div>Message: {this.state.message}</div>
    </Fragment>
    )
  
   }

}

export default App;
