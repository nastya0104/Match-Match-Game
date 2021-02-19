import React, { useEffect } from 'react';

import styles from './styles.module.css';
import converterTime from './converterTime';

export default function Timer({ time, startTimer, stopTimer }) {
    useEffect(
        () => {
            startTimer();
            return stopTimer;
        }, [],
    );

    const minutes = Math.floor(time / 60);

    const renderTimeIsUp = () => {
        stopTimer();
        return <div className={styles.timeIsUp}>Время истекло</div>;
    };

    return (
        <div className={styles.timer}>
            { minutes >= 60 
            ? renderTimeIsUp()
            : converterTime(time)
            }
        </div>
    );
}