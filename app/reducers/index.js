import { combineReducers } from 'redux';
import test from './test';

export default function(reducers) {
  return combineReducers({
    ...reducers,
    test,
  });
}
