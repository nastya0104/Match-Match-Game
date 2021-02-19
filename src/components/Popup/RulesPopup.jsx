import React from 'react';

import styles from './styles.module.css';

export default function RulesPopup({ name }) {
    return (
        <div className={`${styles.popupContainer} ${styles.rulesContainer}`}>
            <h4>{name}</h4>
            <ol>
                <li>Выберите сложность игры и рубашку карт.</li>
                <li>Переверните любые две карты.</li>
                <li>Если они совпадают, переверните снова любые две карты.</li>
                <li>Запоминайте перевернутые карты и где они лежат.</li>
                <li>Игра считается законченной, если все карты совпали.</li>
                <li>Вы можете посмотреть ТОП-10 результатов игры.</li>
            </ol>
        </div>
    );
}