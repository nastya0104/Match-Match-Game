import React from 'react';

import styles from './styles.module.css';

export default function TopPopup({ name }) {
    return (
        <div className={`${styles.popupContainer} ${styles.topContainer}`}>
            <h4>{name}</h4>

        </div>
    );
}