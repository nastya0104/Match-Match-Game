import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.css';

function ComplexityPopup({ name, onChange, value }) {
    return (
        <div className={`${styles.popupContainer} ${styles.complexityContainer}`}>
            <h4>{name}</h4>
            <label>
                <input type="radio" name={name} value={6} checked={value === '6'} onChange={onChange} />
                Легкий (12 карт)
            </label>
            <label>
                <input type="radio" name={name} value={9} checked={value === '9'} onChange={onChange} />
                Средний (18 карт)
            </label>
            <label>
                <input type="radio" name={name} value={12} checked={value === '12'} onChange={onChange} />
                Сложный (24 карт)
            </label>
        </div>
    );
}

ComplexityPopup.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
};

export default React.memo(ComplexityPopup);