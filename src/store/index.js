import { createStore } from 'redux';
import matchGameReducer from './reducer';

const store = createStore(matchGameReducer);

export default store;