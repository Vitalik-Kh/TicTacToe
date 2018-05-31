import React from 'react';

import GameField from '../../components/GameParts/GameField';
import AI from '../../AI/AI';
import {checkForWinner} from '../../utilities/checkForWinner';

class Game extends React.Component {
    state = {
        currentPlayer: 'X',
        playerX: {human: true, AI: false},
        playerO: {human: false, AI: true},
        //X, O or null:
        squaresStatus: [null, null, null, 
                        null, null, null, 
                        null, null, null],
        winner: null,
        disableInput: false
    }

    componentDidUpdate = () => {
        if (((this.state.playerX.AI && this.state.currentPlayer === 'X') ||
            (this.state.playerO.AI && this.state.currentPlayer === 'O')) &&
            !this.state.winner) {
            
            const AImove = AI(this.state.squaresStatus);
            const newSquaresStatus = [...this.state.squaresStatus];
            newSquaresStatus[AImove] = this.state.currentPlayer;
            const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
            const winner = checkForWinner(newSquaresStatus);
            this.setState({
                ...this.state,
                currentPlayer: nextPlayer,
                squaresStatus: newSquaresStatus,
                winner: winner,
                disableInput: false
            });
        } else if (!this.state.winner && this.state.disableInput === true) {
            this.setState({disableInput: false});
        } 
    }

    playerMoveHandler = (squareID) => {
        if (this.state.squaresStatus[squareID] === null) {
            const newSquaresStatus = [...this.state.squaresStatus];
            newSquaresStatus[squareID] = this.state.currentPlayer;
            const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
            const winner = checkForWinner(newSquaresStatus);
        
            this.setState({
                ...this.state,
                currentPlayer: nextPlayer,
                squaresStatus: newSquaresStatus,
                winner: winner,
                disableInput: true
            });
        }
    }

    render() {
        return (
            <div>
                <GameField 
                    squaresStatus = { this.state.squaresStatus }
                    playerMoveHandler = { this.playerMoveHandler }
                    start = { this.state.start }
                    winner = { this.state.winner }
                    inputDisabled = { this.state.disableInput }
                />
            </div>
        )
    }
}

export default Game;