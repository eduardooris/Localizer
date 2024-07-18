import { combineReducers } from 'redux';
import dadosReducer from '../model/profile';
import mapReducer from '../views/Home/redux'
const rootReducer = combineReducers({
  dados: dadosReducer,
  mapReducer: mapReducer
});

export default rootReducer;
