import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import CardsFieldContainer from '../CardsFieldContainer';
/* import Menu from '../../components/Menu'; */
import WelcomePage from '../../components/WelcomePage';
import { setPlayer } from './playFormActions';
import PlayerForm from '../../components/PlayerForm';

function MatchGameContainer() {
    const player = useSelector((state) => state.playFormReducer.player);
    const dispatch = useDispatch();
    const playFormIsFilled = useSelector((state) => state.playFormReducer.playFormIsFilled);

    const savePlayer = (e) => {
        e.preventDefault();
        const inputs = [...e.currentTarget.elements].slice(0, 3);
        inputs.forEach((item) => {
            if (!item.value) {
                item.style.border = '1px solid red';
            } else {
                item.style.border = '1px solid gray';
            }
        });
        const [firstName, lastName, email] = inputs.map((item) => item.value);
        if (firstName && lastName && email) {
            const matchGamePlayer = {
                firstName,
                lastName,
                email,
            };
            dispatch(setPlayer(matchGamePlayer));
            localStorage.setItem('matchGamePlayer', JSON.stringify(matchGamePlayer));
        }
    };

    return (
        <>
            <PlayerForm onSubmit={savePlayer} player={player} />

            <BrowserRouter>
                <Route exact path="/" component={WelcomePage} />
                <Route path="/game" component={CardsFieldContainer} />
            </BrowserRouter>
            {/* <Menu /> */}
        </>
    );
}

export default React.memo(MatchGameContainer);