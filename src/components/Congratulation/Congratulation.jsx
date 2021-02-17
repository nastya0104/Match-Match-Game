import React, { useEffect } from 'react';

import styles from './styles.module.css';
import converterTime from '../Timer/converterTime';

export default function Congratulation({ stopTimer, time }) {
    useEffect(
        () => {
            stopTimer();
        }, [],
    );

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.congratulation}>Поздравляем!</div>
                <div className={styles.result}>{`Ваше время - ${converterTime(time)}`}</div>
            </div>
        </div>
    );
}