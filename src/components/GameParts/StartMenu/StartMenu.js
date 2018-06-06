import React from 'react';

import NewGame from './NewGame/NewGame';
//import PlayAgain from './PlayAgain/PlayAgain';

const startMenu = (props) => {
    let gameStart = null;
    if (props.newGame) {
        gameStart = <NewGame />
    } else {
        gameStart = <div>Play again</div>
    }

    return gameStart;
}

export default startMenu;