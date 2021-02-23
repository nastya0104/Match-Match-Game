import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setResult } from '../Menu/menuActions';
import converterTime from '../../components/Timer/converterTime';
import Congratulation from '../../components/Congratulation';

export default function CongratulationContainer({ cardsAmount }) {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.timerReducer.result);

    const gameResult = {
        cardsAmount, 
        result,
    };
    dispatch(setResult(gameResult));

    return (
        <Congratulation result={converterTime(result)} />
    );
}