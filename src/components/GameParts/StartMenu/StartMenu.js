import React from 'react';

import NewGame from './NewGame/NewGame';
import PlayAgain from './PlayAgain/PlayAgain';

const startMenu = (props) => {
    let gameStart = null;
    if (!props.playing && !props.winner.winIDs && !props.winner.draw) {
        gameStart = <NewGame 
            toggleGameMode = { props.toggleGameMode }
            toggleXO = { props.toggleXO }
            X = { props.X }
            O = { props.O }
            playBtnClicked = { props.playBtnClicked } />
    } else if ( !props.playing && (props.winner.winIDs || props.winner.draw) ) {
        gameStart = <PlayAgain
            playAgainBtnClicked = { props.playAgainBtnClicked }
            newGameBtnClicked = { props.newGameBtnClicked }
            winner = { props.winner.winPlayer ? 
                       props.winner.winPlayer :
                       'Draw' } />
    }

    return (
        gameStart
    );

}

export default startMenu;