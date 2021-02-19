import React from 'react';

import styles from './styles.module.css';

export default function ComplexityPopup({ name, onChange, value }) {
    return (
        <div className={`${styles.popupContainer} ${styles.complexityContainer}`}>
            <h4>{name}</h4>
            <label>
                <input type="radio" name={name} value={6} onChange={onChange} />
                Легкий (12 карт)
            </label>
            <label>
                <input type="radio" name={name} value={9} onChange={onChange} />
                Средний (18 карт)
            </label>
            <label>
                <input type="radio" name={name} value={12} onChange={onChange} defaultChecked />
                Сложный (24 карт)
            </label>
        </div>
    );
}