import React from 'react';

import styles from './styles.module.css';

export default function CardsShirtPopup({ name }) {
    return (
        <div className={`${styles.popupContainer} ${styles.cardsShirtContainer}`} >
            <h4>{name}</h4>
            <label>
                <input type="radio" name={name} value="Harry Potter" defaultChecked />
                Harry Potter
            </label>
            <label>
                <input type="radio" name={name} value="Simon's Cat" />
                Simon's Cat
            </label>
        </div >
    );
}