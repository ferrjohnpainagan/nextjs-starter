import { combineReducers } from 'redux';
import { apiReducers } from './apiReducer';
const rootReducer = combineReducers({
  ...apiReducers,
});

export default rootReducer;
