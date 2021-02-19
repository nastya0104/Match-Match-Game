import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.css';

function Card({
    cardShirt, picture, opened, hidden, onClick, index,
}) {
    return (
        <div className={`${styles.flipCard} ${opened ? `${styles.opened}` : ''} ${hidden ? `${styles.hidden}` : ''}`}
            onClick={() => onClick(index, picture)}>
            <div className={styles.flipCardFront} style={{ backgroundImage: `url(${cardShirt})` }}></div>
            <div className={styles.flipCardBack} style={{ backgroundImage: `url(${picture})` }}></div>
        </div>
    );
}

Card.propTypes = {
    cardShirt: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    opened: propTypes.bool.isRequired,
    hidden: propTypes.bool.isRequired,
    onClick: propTypes.func.isRequired,
    index: propTypes.number.isRequired,
};

export default React.memo(Card);