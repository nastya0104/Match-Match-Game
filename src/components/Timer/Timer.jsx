import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.css';
import converterTime from './converterTime';

function Timer({ time, startTimer, stopTimer }) {
    useEffect(
        () => {
            startTimer();
            return stopTimer;
        }, [startTimer, stopTimer],
    );

    const minutes = Math.floor(time / 60);

    const renderTimeIsUp = () => {
        return <div className={styles.timeIsUp}>Время истекло</div>;
    };

    return (
        <div className={styles.timer}>
            { minutes >= 60
                ? renderTimeIsUp()
                : converterTime(time)
            }
        </div>
    );
}

Timer.propTypes = {
    time: propTypes.number.isRequired,
    startTimer: propTypes.func.isRequired,
    stopTimer: propTypes.func.isRequired,
};

export default React.memo(Timer);