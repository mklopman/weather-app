// purpose is to render list of cities, so it's going to have to access redux state/all that data, so must be container
// import connect function, define mapStateToProps, then pull weather data into our container


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		let temps = cityData.list.map(weather => weather.main.temp);
		temps = temps.map(temp => temp * 9/5 - 459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;
		const { lon, lat } = cityData.city.coord; // grabbing the coord object and taking the lat/long props

		console.log(temps);
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="F" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
			</tr>
			);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {   // this gives us access to this.props.weather inside of WeatherList
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);

// ** 
// speficially using state.weather because we assigned a weather key
// to combinedreducers in reducers/index.js 
// ( weather ) is the es6 syntax ==== { weather: weather }
//**