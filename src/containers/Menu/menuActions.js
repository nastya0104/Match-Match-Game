export const SET_VISIBLE_ITEM = 'SET_VISIBLE_ITEM';
export const SET_COMPLEXITY = 'SET_COMPLEXITY';
export const SET_CARDS_SHIRT = 'SET_CARDS_SHIRT';

export function setVisibleItem(name) {
    return {
        type: SET_VISIBLE_ITEM,
        data: name,
    };
}

export function setComplexity(value) {
    return {
        type: SET_COMPLEXITY,
        data: value,
    };
}

export function setCardsShirt(src) {
    return {
        type: SET_CARDS_SHIRT,
        data: src,
    };
}