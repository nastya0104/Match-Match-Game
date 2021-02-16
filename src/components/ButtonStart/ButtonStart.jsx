import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export default function ButtonStart() {
    return (
        <Link to="game">
            <button className={styles.button}>
                Старт
            </button>
        </Link>
    );
}