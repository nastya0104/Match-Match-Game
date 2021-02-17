import React from 'react';

import styles from './styles.module.css';
import ButtonStart from '../ButtonStart';
import Menu from '../Menu';

export default function WelcomePage() {
    return (
        <div className={styles.container}>
            <p>MATCHING GAME</p>
            <ButtonStart />
            <Menu />
        </div>
    );
}