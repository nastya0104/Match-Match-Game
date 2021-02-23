import React from 'react';

import styles from './styles.module.css';

export default function Congratulation({ result }) {
    return (
        <div className={styles.container}>
            <div className={styles.congratulation}>Поздравляем!</div>
            <div className={styles.result}>Ваше время - {result}</div>
        </div>

    );
}