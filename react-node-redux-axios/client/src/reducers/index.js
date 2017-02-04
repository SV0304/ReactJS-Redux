import {combineReducers} from 'redux';
import {TEST_ACTION} from '../actions/types';

export const testReducer =  function (state={}, action){
	switch(action.type){
		case TEST_ACTION:
			return action.payload;
			break;
	}
	return state;
}


const Reducers = combineReducers({
	helloWorldText:testReducer
});

export default Reducers;