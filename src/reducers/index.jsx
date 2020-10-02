import { combineReducers } from 'redux';
import arrayReducer from './arrays';
import bossReducer from './bosses';

const rootReducer = combineReducers({
  arrays: arrayReducer,
  bosses: bossReducer,
});

export default rootReducer;
