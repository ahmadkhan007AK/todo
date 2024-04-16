import { combineReducers } from 'redux';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers if needed
});

export default rootReducer;
