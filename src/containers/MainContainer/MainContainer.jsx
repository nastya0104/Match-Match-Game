import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CongratulationContainer from '../CongratulationContainer';
import { resetCardsField, setCards } from '../CardsFieldContainer/cardsActions';
import shuffle from '../CardsFieldContainer/shuffleFunction';
import cardsList from '../../cards.json';
import ButtonBack from '../../components/ButtonBack';
import CardsFieldContainer from '../CardsFieldContainer';
import TimerContainer from '../TimerContainer/TimerContainer';

export default function MainContainer() {
    const dispatch = useDispatch();
    const isWin = useSelector((state) => state.cardsReducer.isWin);
    const cardsAmount = useSelector((state) => state.menuReducer.complexity);

    const goBack = () => {
        dispatch(resetCardsField());
    };

    (function initCardsField(arr) {
        const requiredCards = arr.slice(0, cardsAmount);
        const cardsArray = shuffle([...requiredCards, ...requiredCards].map((card, index) => ({
            src: card.src,
            opened: false,
            hidden: false,
            index,
        })));
        dispatch(setCards(cardsArray));
    }(cardsList));

    return (
        <>
            {isWin ? <CongratulationContainer cardsAmount={cardsAmount} /> : (
                <>
                    <CardsFieldContainer />
                    <TimerContainer />
                </>
            )}
            <ButtonBack onClick={goBack} />
        </>
    );
}