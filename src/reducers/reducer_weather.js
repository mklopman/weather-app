import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
		// put inside of an array because there will be MULTIPLE properties
		return [ action.payload.data, ...state ];
	}

	return state; 

}

// simple reducer that just takes an action and console logs it
// doesn't do anything with the state

// action.payload.data comes from the response object in console log of the action
// adding on to the existing state, not replacing it
// CONCAT DOESN'T CHANGE/MUTATE THE STATE, I'M RETURNING A NEW VERSION OF STATE