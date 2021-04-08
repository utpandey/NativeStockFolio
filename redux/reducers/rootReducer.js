import { combineReducers } from 'redux'
import reducer from './stockReducer';

export const rootReducer = combineReducers({
    stock: reducer
});