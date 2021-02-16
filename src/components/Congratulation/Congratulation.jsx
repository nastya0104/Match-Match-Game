import React, { useEffect } from 'react';

import ButtonBack from '../ButtonBack';
import styles from './styles.module.css'

export default function Congratulation({ stopTimer, time }) {
    useEffect(
        () => {
            stopTimer();
        }, [],
    );

    return (
        <div>
            <div className={styles.congratulation}>
                {`Поздравляем! Время - ${time} секунд.`}
            </div>
            <ButtonBack />
        </div>
    );
}