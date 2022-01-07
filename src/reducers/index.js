import counterReducer from "./counterReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   counters:counterReducer
});

export default rootReducer;
