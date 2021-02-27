import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.css';

function Card({
    cardsShirt, picture, opened, hidden, onClick, index, cardsAmount,
}) {
    return (
        <div className={`${styles.flipCard} ${opened ? `${styles.opened}` : ''} ${hidden ? `${styles.hidden}` : ''} ${cardsAmount === 24 ? `${styles.small}` : ''} ${cardsAmount === 18 ? `${styles.middle}` : ''}`}
            onClick={() => onClick(index, picture)}>
            <div className={styles.flipCardFront} style={{ backgroundImage: `url(${cardsShirt})` }}></div>
            <div className={styles.flipCardBack} style={{ backgroundImage: `url(${picture})` }}></div>
        </div>
    );
}

Card.propTypes = {
    cardsShirt: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    opened: propTypes.bool.isRequired,
    hidden: propTypes.bool.isRequired,
    onClick: propTypes.func.isRequired,
    index: propTypes.number.isRequired,
    cardsAmount: propTypes.number.isRequired,
};

export default React.memo(Card);