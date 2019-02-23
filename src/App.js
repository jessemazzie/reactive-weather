import React, { Component } from 'react';
import icon from './sun.png';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: {},
      temp: '',
      units: 'imperial',
      description: '',
      lat: '',
      lon: ''
    };
    this.getLocation();
    this.fetchWeather();
  };

  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
         console.log(position.coords.longitude);
         console.log(position.coords.latitude);
         this.setState({lon: position.coords.longitude, 
                        lat: position.coords.latitude});
      });
    }
  }

  fetchWeather() {
    console.log(this.state);
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.lon + '&units=' + this.state.units + '&APPID=49d7e6b3201708a377f7acfe7d5877e0';
    fetch(url).then(temp => {
      return temp.json();
    }).then(data => {
      console.log(data);
      this.setState({ weather: data, temp: data.main.temp, 
                      description: data.weather[0].description })
      
      //document.title = this.state.weather.main.temp + '°';
      
      console.log(this.state)
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
