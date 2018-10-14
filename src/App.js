import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
import Nav from './components/Nav'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Routes/>
      </div>
    );
  }
}

export default App;
