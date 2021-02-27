import {
    SET_CARDS_SHIRT, SET_VISIBLE_ITEM, SET_COMPLEXITY,
} from './menuActions';
import { potterCardShirt } from '../../assets/img/potter/potter';

const initialState = {
    complexity: '12',
    visibleItem: null,
    cardsShirt: potterCardShirt,
    results: JSON.parse(localStorage.getItem('matchGameResults')) || [],
};

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBLE_ITEM: {
            return {
                ...state,
                visibleItem: action.data,
            };
        }

        case SET_COMPLEXITY: {
            return {
                ...state,
                complexity: action.data,
            };
        }

        case SET_CARDS_SHIRT: {
            return {
                ...state,
                cardsShirt: action.data,
            };
        }

        default: return state;
    }
}