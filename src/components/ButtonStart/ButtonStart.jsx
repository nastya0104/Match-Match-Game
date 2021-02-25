import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export default function ButtonStart() {
    return (
        <div className={styles.a}>
            <Link to="game">
                <button type="button" className={styles.button}>
                    Старт
                </button>
            </Link>
        </div>
    );
}