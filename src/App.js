import React, { Component } from 'react';
import icon from './sun.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="weather-icon" alt="logo" />
          <div id = "temperature">
            87°
          </div>
        </header>
      </div>
    );
  }
}

export default App;
