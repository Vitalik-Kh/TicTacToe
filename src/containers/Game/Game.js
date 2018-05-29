import React from 'react';

import GameField from '../../components/GameParts/GameField';

class Game extends React.Component {
    state = {
        currentPlayer: 'X',
        start: false,
        //X, O or null:
        squaresStatus: [null, null, null, 
                        null, null, null, 
                        null, null, null]
    }
    xxxonnnon

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

    start = () => {this.setState({...this.state, start: !this.state.start})}

    render() {
        return (
            <div>
                <GameField 
                    squaresStatus = { this.state.squaresStatus }
                    playerMoveHandler = { this.playerMoveHandler }
                    start = {this.state.start}
                />
                <button onClick={this.start}>click</button>
            </div>
        )
    }
}

export default Game;