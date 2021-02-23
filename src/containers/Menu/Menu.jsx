import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCardsShirt, setComplexity, setVisibleItem } from './menuActions';
import { clearTime } from '../TimerContainer/timerActions';
import styles from './styles.module.css';
import MenuItem from '../../components/MenuItem';
import {
    ComplexityPopup, CardsShirtPopup, RulesPopup, TopPopup, CardShirtPopup,
} from '../../components/Popup';
import {
    complexity, cardsShirt, rules, top, gameMenu,
} from './menuItemName';

export default function Menu() {
    const dispatch = useDispatch();

    const results = useSelector((state) => state.timerReducer.results);
    const player = useSelector((state) => state.playFormReducer.player);
    const complexityValue = useSelector((state) => state.menuReducer.complexity);
    const visibleItemName = useSelector((state) => state.menuReducer.visibleItem);

    const showPopup = (e) => {
        const eventElemName = e.currentTarget.dataset.name;
        if (eventElemName === visibleItemName) {
            dispatch(setVisibleItem(null));
        } else {
            dispatch(setVisibleItem(e.currentTarget.dataset.name));
        }
    };

    const selectComplexity = (e) => {
        dispatch(setComplexity(e.target.value));
        dispatch(clearTime());
    };

    document.addEventListener('click', (e) => {
        if (!e.target.closest(`.${gameMenu}`)) {
            dispatch(setVisibleItem(null));
        }
    });

    return (
        <div className={`${styles.menu} ${gameMenu}`}>
            <MenuItem name={rules} onClick={showPopup}>
                {visibleItemName === rules ? <RulesPopup name={rules} /> : ''}
            </MenuItem>
            <MenuItem name={complexity} onClick={showPopup}>
                {visibleItemName === complexity ? <ComplexityPopup onChange={selectComplexity} name={complexity} value={complexityValue} /> : ''}
            </MenuItem>
            <MenuItem name={cardsShirt} onClick={showPopup}>
                {visibleItemName === cardsShirt ? <CardShirtPopup name={cardsShirt} /> : ''}
            </MenuItem>
            <MenuItem name={top} onClick={showPopup}>
                {visibleItemName === top ? <TopPopup name={top} results={results} player={player} /> : ''}
            </MenuItem>
        </div>
    );
}