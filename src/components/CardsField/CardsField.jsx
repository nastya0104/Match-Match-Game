import React from 'react';
import propTypes from 'prop-types';

import Card from '../Card';
import styles from './styles.module.css';

function CardField({ cards, onClick, cardsShirt }) {
    return (
        <div className={styles.cardField}>
            {
                cards.map((card) => <Card key={card.index} cardsAmount={cards.length} cardsShirt={cardsShirt} index={card.index} onClick={onClick} picture={card.src} opened={card.opened} hidden={card.hidden} />)
            }
        </div>
    );
}

CardField.propTypes = {
    cards: propTypes.array.isRequired,
    onClick: propTypes.func.isRequired,
    cardsShirt: propTypes.string.isRequired,
};

export default React.memo(CardField);