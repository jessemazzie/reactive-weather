import React, { Component } from 'react';
import icon from './sun.png';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      weather: {},
      units: 'imperial'
      //TODO: Add flag in state for switching between imperial/metric
    };
    this.fetchWeather();
  };

  fetchWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=4802316&units=' + this.state.units + '&APPID=49d7e6b3201708a377f7acfe7d5877e0').then(temp => {
      return temp.json();
    }).then(data => {
      this.setState({weather: data, iconUrl: "http://openweathermap.org/img/w/" + data.weather.icon + ".png"});
      document.title = this.state.weather.main.temp + '°';
      console.log(this.state.weather);
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title></title>
        </header>
        <canvas>
          
        </canvas>
      </div>
    );
  }
}

export default App;
