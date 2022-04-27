import {combineReducers} from 'redux';
import randomReducer from './randomReducer';
import counterReducer from './counterReducer';
const combinedreducer = combineReducers({counter:counterReducer, random:randomReducer});
export default combinedreducer;