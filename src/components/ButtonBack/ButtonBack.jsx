import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export default function ButtonBack({ onClick }) {
    return (
        <Link to="/">
            <button onClick={onClick} className={styles.button}>
                Назад
            </button>
        </Link>
    );
}