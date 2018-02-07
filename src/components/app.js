import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
    <div className="col-lg-12 app-body">
    	<h1 className="weather-header">5-Day Forecast</h1>
	      <div className="weather-body">
	      	<SearchBar />
	      	<WeatherList />
	      </div>
     </div>
    );
  }
}
