import React from 'react';

import NewGame from './NewGame/NewGame';
//import PlayAgain from './PlayAgain/PlayAgain';

class startMenu extends React.Component {
    state = {
        newGame: true,
        playerX: {human: true, AI: false},
        playerO: {human: false, AI: true}
    }

    render() {
        let gameStart = null;
        if (this.state.newGame) {
            gameStart = <NewGame />
        } else {
            gameStart = <div>Play again</div>
        }
        return (
            gameStart
        );
    }
}

export default startMenu;