import {combineReducers} from 'redux';
import Products from './reducer-gridwall';

const allReducers = combineReducers({
    products: Products
});

export default allReducers;