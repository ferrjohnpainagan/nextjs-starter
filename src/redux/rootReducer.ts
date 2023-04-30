import { combineReducers } from 'redux';
import { apiReducers } from './apiReducer';
import auth from './slices/auth/auth';
const rootReducer = combineReducers({
  auth,
  ...apiReducers,
});

export default rootReducer;
