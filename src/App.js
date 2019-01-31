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
    fetch('api.openweathermap.org/data/2.5/weather?zip=26301&APPID=49d7e6b3201708a377f7acfe7d5877e0').then(results => {
      console.log(results.json());
      return results.json();
    }).then(data => {
      let weatherData = data.results.map((weatherData) => {
        return(<div>weatherData</div>)
      })
      this.setState({weather: weatherData});
      console.log('HERE' + weatherData);
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
