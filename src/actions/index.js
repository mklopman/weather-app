import axios from 'axios';

const API_KEY = '10851b8ce263e4755768f6ee650a8cf1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; // define variable called FETCH_WEATHER, assign string 'FETCH_WEATHER TO IT', export it, then action type is FETCH_WEATHER

export function getWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); // take this url we crafted with a particular search city and make a get request on it
	
	return {
		type: FETCH_WEATHER,
		payload: request // passing in the request to the payload to describe the action
	};
}