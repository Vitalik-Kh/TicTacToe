import React from 'react';

import GameField from '../../components/GameParts/GameField';

class Game extends React.Component {
    state = {
        currentPlayer: 'X',
        //X, O or null:
        squaresStatus: [null, null, null, 
                        null, null, null, 
                        null, null, null]
    }

    playerMoveHandler = (squareID) => {
        const newSquareStatus = [...this.state.squaresStatus];
        newSquareStatus[squareID-1] = this.state.currentPlayer;
        const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
        this.setState({
            ...this.state,
            currentPlayer: nextPlayer,
            squaresStatus: newSquareStatus
        });
             
    }

    render() {
        return (
            <div>
                <GameField 
                    squaresStatus = { this.state.squaresStatus }
                    playerMoveHandler = { this.playerMoveHandler }
                />
            </div>
        )
    }
}

export default Game;