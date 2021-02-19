import React from 'react';

import styles from './styles.module.css';

export default function MenuItem({
    children, name, onClick,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.containerMain}>
                <div className={styles.menuItemContainer} onClick={onClick} data-name={name}>
                    <div className={styles.menuItem}>
                        {name}
                        <div class={styles.arrow}>
                            <div></div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}