import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Congratulation from '../../components/Congratulation';
import { resetCardsField, setCards } from '../CardsFieldContainer/cardsActions';
import shuffle from '../CardsFieldContainer/shuffleFunction';
import { potters, potterCardShirt } from '../../assets/img/potter/potter';
import { cats } from '../../assets/img/cat/cat';
import ButtonBack from '../../components/ButtonBack';
import CardsFieldContainer from '../CardsFieldContainer';
import TimerContainer from '../TimerContainer/TimerContainer';

export default function MainContainer() {
    const dispatch = useDispatch();
    const isWin = useSelector((state) => state.cardsReducer.isWin);
    const cardsAmount = useSelector((state) => state.menuReducer.complexity);
    const cardsShirt = useSelector((state) => state.menuReducer.cardsShirt);
    const cardsImage = cardsShirt === potterCardShirt ? potters : cats;
    const goBack = useCallback(() => {
        dispatch(resetCardsField());
    }, [dispatch]);

    (function initCardsField(arr) {
        const requiredCards = arr.slice(0, cardsAmount);
        const cardsArray = shuffle([...requiredCards, ...requiredCards].map((card, index) => ({
            src: card,
            opened: false,
            hidden: false,
            index,
        })));
        dispatch(setCards(cardsArray));
    }(cardsImage));

    return (
        <>
            {isWin ? <Congratulation /> : (
                <>
                    <CardsFieldContainer cardsShirt={cardsShirt} />
                </>
            )}
            <TimerContainer isWin={isWin} cardsAmount={cardsAmount} />
            <ButtonBack onClick={goBack} />
        </>
    );
}