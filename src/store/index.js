import { createStore } from 'redux';
import matchGameReducer from '../containers/CardsFieldContainer/reducer';

const store = createStore(matchGameReducer);
console.log(store.getState());

export default store;