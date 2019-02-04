import React, { Component } from 'react';
import icon from './sun.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {}
      //TODO: Add flag in state for switching between imperial/metric
    };
    this.fetchWeather();
  };

  fetchWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=4802316&units=imperial&APPID=49d7e6b3201708a377f7acfe7d5877e0').then(temp => {
      return temp.json();
    }).then(data => {
      this.setState({weather: data});
      console.log(data);
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="weather-icon" alt="logo" />
          <div id = "temperature">
            {/* {this.state.weather[0].main.temp} + '°' */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
