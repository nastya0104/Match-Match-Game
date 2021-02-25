import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.css';

function PlayerForm({ onSubmit, player }) {
    return (
        <div className={`${styles.blockField} ${player ? styles.hidden : ''}`}>
            <form className={styles.playerForm} onSubmit={onSubmit}>
                <label className={styles.formItem}>
                    <input type="text" placeholder="Имя" id="firstName" />
                </label>
                <label className={styles.formItem}>
                    <input type="text" placeholder="Фамилия" id="lastName" />
                </label>
                <label className={styles.formItem}>
                    <input type="email" placeholder="Email" id="email" />
                </label>


                {/* <div className={styles.formItem}>
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
                </div> */}
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