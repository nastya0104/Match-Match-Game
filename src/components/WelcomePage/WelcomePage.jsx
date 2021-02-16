import React from 'react';

import styles from './styles.module.css';
import ButtonStart from '../ButtonStart';
import Menu from '../Menu';

export default function WelcomePage() {
    return (
        <div className={styles.container}>
            <ButtonStart />
            <p>MATCHING GAME</p>
            <Menu />
        </div>
    );
}