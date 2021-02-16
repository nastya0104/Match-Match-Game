import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardsField from '../../components/CardsField';
import Congratulation from '../../components/Congratulation';
import {
    openCard, hideCard, closeCard, setOpenedCard, deleteOpenedCard, blockClick, resetCardsField,
} from './cardsActions';
import {
    clearTime, clearTimer, setTime, setTimer,
} from './timerActions';
import Timer from '../../components/Timer';
import ButtonBack from '../../components/ButtonBack';

export default function CardsFieldContainer() {
    const cards = useSelector((state) => state.cardsReducer.cards);
    const dispatch = useDispatch();
    const openedCard = useSelector((state) => state.cardsReducer.openedCard);
    const isBlockedClick = useSelector((state) => state.cardsReducer.isBlockedClick);
    const isWin = useSelector((state) => state.cardsReducer.isWin);

    const time = useSelector((state) => state.timerReducer.time);
    const timer = useSelector((state) => state.timerReducer.timer);

    const startTimer = () => {
        dispatch(clearTime());
        const id = setInterval(() => {
            dispatch(setTime());
        }, 1000);
        dispatch(setTimer(id));
    };

    const stopTimer = () => {
        clearInterval(timer);
        dispatch(clearTimer());
    };

    const goBack = () => {
        dispatch(resetCardsField());
        stopTimer();
    }

    const onClick = useCallback((index, src) => {
        if (isBlockedClick) return;
        if (index === openedCard.index) return;

        dispatch(openCard(index));

        if (openedCard.src) {
            dispatch(blockClick());

            if (src === openedCard.src) {
                setTimeout(() => {
                    dispatch(hideCard(src));
                    dispatch(deleteOpenedCard());
                }, 800);
            } else {
                setTimeout(() => {
                    dispatch(closeCard(src));
                    dispatch(deleteOpenedCard());
                }, 800);
            }
        } else {
            dispatch(setOpenedCard(src, index));
        }
    }, [dispatch, isBlockedClick, openedCard]);

    return (
        <>
            {isWin ? <Congratulation stopTimer={stopTimer} time={time} /> : (
                <>
                    <CardsField onClick={onClick} cards={cards} />
                    <Timer time={time} startTimer={startTimer} stopTimer={stopTimer} />
                    <ButtonBack onClick={goBack} />
                </>
            )}
        </>
    );
}