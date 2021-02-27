import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.css';

function MenuItem({
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

MenuItem.propTypes = {
    name: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    children: propTypes.any.isRequired,
};

export default React.memo(MenuItem);