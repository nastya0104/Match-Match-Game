import React, { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import Timer from '../../components/Timer';
import {
    clearTime, setTime, setResult,
} from './timerActions';

function TimerContainer({ isWin, cardsAmount }) {
    const dispatch = useDispatch();
    const time = useSelector((state) => state.timerReducer.time);
    const timerId = useRef(null);
    
    const startTimer = useCallback(() => {
        timerId.current = setInterval(() => {
            dispatch(setTime());
        }, 1000);
    }, [dispatch]);

    const stopTimer = useCallback(() => {
        dispatch(clearTime());
        clearInterval(timerId.current);
    }, [dispatch]);

    if (isWin) {
        dispatch(setResult(cardsAmount));
        clearInterval(timerId.current);
    }

    return (
        <Timer time={time} startTimer={startTimer} stopTimer={stopTimer} />
    );
}

TimerContainer.propTypes = {
    isWin: propTypes.bool.isRequired,
    cardsAmount: propTypes.string.isRequired,
};

export default React.memo(TimerContainer);