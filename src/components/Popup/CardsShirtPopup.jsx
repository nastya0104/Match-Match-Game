import React from 'react';
import propTypes from 'prop-types';

import { potterCardShirt } from '../../assets/img/potter/potter';
import { catCardShirt } from '../../assets/img/cat/cat';
import styles from './styles.module.css';

function CardsShirtPopup({ name, onChange, value }) {
    return (
        <div className={`${styles.popupContainer} ${styles.cardsShirtContainer}`} >
            <h4>{name}</h4>
            <div className={styles.containerCards}>
                <label>
                    <input type="radio" name={name} value={potterCardShirt} onChange={onChange} checked={value === potterCardShirt} />
                    <div className={styles.cardShirt}>
                        <img src={potterCardShirt} alt="Harry Potter" />
                    </div>
                </label>
                <label>
                    <input type="radio" name={name} value={catCardShirt} onChange={onChange} checked={value === catCardShirt} />
                    <div className={styles.cardShirt}>
                        <img src={catCardShirt} alt="Simon's Cat" />
                    </div>
                </label>
            </div>
        </div >
    );
}

CardsShirtPopup.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
};

export default React.memo(CardsShirtPopup);