import React from 'react';

import styles from './styles.module.css';

export default function PlayerForm({ onSubmit, player }) {
    return (
        <div className={`${styles.blockField} ${player ? styles.hidden : ''}`}>
            <form className={styles.playerForm} onSubmit={onSubmit}>
                <div className={styles.formItem}>
                    <label htmlFor="firstName">Ваше имя:</label>
                    <input type="text" id="firstName" />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="lastName">Ваша фамилия:</label>
                    <input type="text" id="lastName" />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="email">Ваш Email:</label>
                    <input type="email" id="email" />
                </div>
                <input type="submit" value="ВХОД" className={styles.buttonForm} />
            </form>
        </div>
    );
}