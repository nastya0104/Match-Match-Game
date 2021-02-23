import {
    SET_TIME, CLEAR_TIME,
} from './timerActions';

const initialState = {
    time: 0,
    timer: null,
    result: null,
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
                result: state.time,
            };
        }

        default: return state;
    }
}