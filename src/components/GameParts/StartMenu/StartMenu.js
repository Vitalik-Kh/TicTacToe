import React from 'react';

import NewGame from './NewGame/NewGame';
import PlayAgain from './PlayAgain/PlayAgain';

const startMenu = (props) => {
    let gameStart = null;
    if (props.newGame) {
        gameStart = <NewGame 
            toggleGameMode = { props.toggleGameMode }
            toggleXO = { props.toggleXO }
            X = { props.X }
            O = { props.O }
            playBtnClicked = { props.playBtnClicked } />
    } else {
        gameStart = <PlayAgain
            playAgainBtnClicked = { props.playAgainBtnClicked }
            newGameBtnClicked = { props.newGameBtnClicked } />
    }

    return (
        gameStart
    );

}

export default startMenu;