import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,   
			center: { 
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}


		// this allows me to get a direct reference to this div by referring to THIS.REFS.MAP
	render() {
		return <div ref="map" />;
	}
}

export default GoogleMap;

//** componentDidMount: lifecycle method that gets called immediately after
// the component renders. 
// Inside componentDidMount, new google.maps.Map is called. It's how
// an embedded google map is created inside the document. It will take 
// a reference to an HTML element, which is the this.refs.map DIV 
//**