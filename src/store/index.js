import { createStore } from 'redux';
import matchGameReducer from './reducer';

const store = createStore(matchGameReducer);
console.log(store.getState());

export default store;