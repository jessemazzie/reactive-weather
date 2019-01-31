import React, { Component } from 'react';
import icon from './sun.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
    this.fetchWeather();
  };

  fetchWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=26301&APPID=49d7e6b3201708a377f7acfe7d5877e0').then(temp => {
      return temp.text();
    }).then(data => {
      this.setState({weather: data});
      console.log('HERE' + data);
    })

  }

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
