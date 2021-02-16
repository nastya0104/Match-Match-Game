import React from 'react';

import styles from './styles.module.css';
import MenuItem from '../MenuItem';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <MenuItem>
                Правила игры
            </MenuItem>
            <MenuItem>
                Сложность
            </MenuItem>
            <MenuItem>
                Рубашка карт
            </MenuItem>
        </div>
    );
}