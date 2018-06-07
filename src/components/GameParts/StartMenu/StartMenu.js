import React from 'react';

import NewGame from './NewGame/NewGame';
//import PlayAgain from './PlayAgain/PlayAgain';

const startMenu = (props) => {
    let gameStart = null;
    if (true) {
        gameStart = <NewGame 
            toggleGameMode = { props.toggleGameMode }
            toggleXO = { props.toggleXO }
            X = { props.X }
            O = { props.O } />
    } else {
        gameStart = <div>Play again</div>
    }

    return (
        gameStart
    );

}

export default startMenu;