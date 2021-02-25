import React from 'react';
import propTypes from 'prop-types';

import converterTime from '../Timer/converterTime';
import styles from './styles.module.css';

function TopPopup({ name, results, player }) {
    return (
        <div className={`${styles.popupContainer} ${styles.topContainer}`}>
            <h4>{name}</h4>
            <div className={styles.playerName}>
                {`${player.firstName} ${player.lastName}`}
            </div>
            <div className={styles.resultContainer}>
                <div>Сложность</div>
                <div>Результат</div>
            </div>
            {results.map((item, index) => (
                <div key={index + item.result} className={styles.resultContainer}>
                    <div>{item.cardsAmount * 2}</div>
                    <div>{converterTime(item.result)}</div>
                </div>
            ))}
        </div>
    );
}

TopPopup.propTypes = {
    name: propTypes.string.isRequired,
    results: propTypes.array.isRequired,
    player: propTypes.object.isRequired,
};

export default React.memo(TopPopup);