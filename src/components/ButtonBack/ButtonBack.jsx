import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

function ButtonBack({ onClick }) {
    return (
        <div className={styles.a}>
            <Link to="/">
                <button type="button" onClick={onClick} className={styles.button}>
                    Назад
                </button>
            </Link>
        </div>
    );
}

ButtonBack.propTypes = {
    onClick: propTypes.func.isRequired,
};

export default React.memo(ButtonBack);