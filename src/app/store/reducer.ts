import { combineReducers } from 'redux';
import * as Github from './github';

export const initialState = () => ({
  github: Github.initialState(),
});

export const reducer = combineReducers({
  github: Github.reducer,
});
