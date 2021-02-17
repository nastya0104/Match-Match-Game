import React, { useEffect } from 'react';

import styles from './styles.module.css';
import converterTime from './converterTime';

export default function Timer({ time, startTimer, stopTimer }) {
    useEffect(
        () => {
            startTimer();
        }, [],
    );

    const minutes = Math.floor(time / 60);

    return (
        <div className={styles.timer}>
            { minutes >= 60 ? (() => {
                stopTimer();
                return <div className={styles.timeIsUp}>Время истекло</div>;
            })() : converterTime(time)
            }
        </div>
    );
}