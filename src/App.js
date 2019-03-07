import React, { Component } from 'react';
import Canvas from './Canvas.js';
import icon from './sun.png';
import './App.css';

/**
 * Main class.
 */
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
    //this.fetchWeather();
  };

  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        //  console.log(position.coords.longitude);
        //  console.log(position.coords.latitude);
         this.setState({lon: position.coords.longitude, 
                        lat: position.coords.latitude});
         console.log(this.state);
         this.fetchWeather();
      });
    }
  }

  //Gets weather from openweathermap API, using latitude and longitude obtained via HTML5.
  async fetchWeather() {
    console.log(this.state.lat);
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.lon + '&units=' + this.state.units + '&APPID=49d7e6b3201708a377f7acfe7d5877e0';
    fetch(url).then(temp => {
      return temp.json();
    }).then(data => {
      // console.log(data);
      // console.log(data.main);
      this.setState({ weather: data, 
                      temp: data.main.temp, 
                      description: data.weather[0].description })
      
      document.title = this.state.weather.main.temp + '° - ' + this.state.description;
      
      console.log(this.state)
    })

  }


  render() {
    return (
        <Canvas/>
    );
  }
}

export default App;
