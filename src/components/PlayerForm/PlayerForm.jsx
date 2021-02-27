import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.css';

function PlayerForm({ onSubmit, player }) {
    return (
        <div className={`${styles.blockField} ${player ? styles.hidden : ''}`}>
            <form className={styles.playerForm} onSubmit={onSubmit}>
                <div className={styles.welcome}>
                    <p>
                        Привет, друг!<br />
                        Чтобы начать игру,<br />
                        введи данные о себе.
                    </p>
                </div>
                <label className={styles.formItem}>
                    <input type="text" placeholder="Имя" id="firstName" />
                </label>
                <label className={styles.formItem}>
                    <input type="text" placeholder="Фамилия" id="lastName" />
                </label>
                <label className={styles.formItem}>
                    <input type="email" placeholder="Email" id="email" />
                </label>
                <input type="submit" value="ВХОД" className={styles.buttonForm} />
            </form>
        </div>
    );
}

PlayerForm.propTypes = {
    player: propTypes.any.isRequired,
    onSubmit: propTypes.func.isRequired,
};

export default React.memo(PlayerForm);