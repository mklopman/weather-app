import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}

		// this.onInputChange = this.onInputChange.bind(this);  // take the existing function, bind it to 'this', replace the existing function with it
	}

	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

// callback function -- must bind the context
	onFormSubmit(event) {
		event.preventDefault();
		this.props.getWeather(this.state.term);
		this.setState({ term: '' });
		// need to grab weather data
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
				<input 
					placeholder="Five-day forecast for your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange.bind(this)}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ getWeather }, dispatch);
}

// 1. { fetchWeather } getting called causes the action creator to return an action
// 2. bindActionCreators with dispatch makes sure the action flows into the middleware and then reducers

export default connect(null, mapDispatchToProps)(SearchBar);

// passing null = hey, i understand redux is maintaining some state, but redux doesn't care and we don't need state here'





