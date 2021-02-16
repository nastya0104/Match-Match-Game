import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import timerReducer from './timerReducer';

const matchGameReducer = combineReducers({
    cardsReducer,
    timerReducer,
});

export default matchGameReducer;