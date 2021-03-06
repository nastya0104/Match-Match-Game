import {
    SET_RESULT, SET_TIME, CLEAR_TIME,
} from './timerActions';

const initialState = {
    time: 0,
    timer: null,
    results: JSON.parse(localStorage.getItem('matchGameResults')) || [],
};

export default function timerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TIME: {
            return {
                ...state,
                time: state.time + 1,
            };
        }

        case CLEAR_TIME: {
            return {
                ...state,
                time: 0,
                resultTime: state.time,
            };
        }

        case SET_RESULT: {
            const newResults = [...state.results, { result: state.time, cardsAmount: action.data }].sort((a, b) => a.result - b.result).slice(0, 10);
            localStorage.setItem('matchGameResults', JSON.stringify(newResults));
            return {
                ...state,
                results: newResults,
            };
        }

        default: return state;
    }
}