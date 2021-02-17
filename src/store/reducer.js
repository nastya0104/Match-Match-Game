import { combineReducers } from 'redux';

import cardsReducer from '../containers/CardsFieldContainer/cardsReducer';
import timerReducer from '../containers/CardsFieldContainer/timerReducer';
import playFormReducer from '../containers/MatchGameContainer/playFormReducer'

const matchGameReducer = combineReducers({
    cardsReducer,
    timerReducer,
    playFormReducer,
});

export default matchGameReducer;