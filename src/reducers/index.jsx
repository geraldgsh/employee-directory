import { combineReducers } from 'redux';
import arraysReducer from './arrays';

const rootReducer = combineReducers({
  arrays: arraysReducer,
});

export default rootReducer;
