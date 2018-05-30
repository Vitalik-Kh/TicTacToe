import React from 'react';

import GameField from '../../components/GameParts/GameField';
import AI from '../../utilities/AI/AI';

class Game extends React.Component {
    state = {
        currentPlayer: 'X',
        players: {
            playerX: 'human',
            playerO: 'AI'
        },
        //X, O or null:
        squaresStatus: [null, null, null, 
                        null, null, null, 
                        null, null, null],
        winner: null
    }

    componentDidUpdate = () => {
        if (this.state.players.playerO === 'AI' && 
            this.state.currentPlayer === 'O' &&
            !this.state.winner) {
            const AImove = AI(this.state.squaresStatus);
            const newSquaresStatus = [...this.state.squaresStatus];
            newSquaresStatus[AImove] = this.state.currentPlayer;
            const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
            const winner = this.checkForWinner(newSquaresStatus);
            this.setState({
                ...this.state,
                currentPlayer: nextPlayer,
                squaresStatus: newSquaresStatus,
                winner: winner
            });
        }
    }

    checkForWinner = (arr) => {
        const  winCombinations = {
            1: [0, 1, 2],
            2: [3, 4, 5],
            3: [6, 7, 8],
            4: [0, 3, 6],
            5: [1, 4, 7],
            6: [2, 5, 8],
            7: [0, 4, 8],
            8: [2, 4, 6]
        }
        let winner = null;
        Object.keys(winCombinations).map(key => {
            const winComb = winCombinations[key];
            if ((arr[winComb[0]] === 'O' || arr[winComb[0]] === 'X') && 
                 arr[winComb[0]] === arr[winComb[1]] && 
                 arr[winComb[1]] === arr[winComb[2]]) {
                winner = {
                    winIDs: winComb,
                    winPlayer: arr[winComb[0]]
                };
            }
        });
        return winner;
    }

    playerMoveHandler = (squareID) => {
        const newSquaresStatus = [...this.state.squaresStatus];
        newSquaresStatus[squareID] = this.state.currentPlayer;
        const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
        const winner = this.checkForWinner(newSquaresStatus);
        this.setState({
            ...this.state,
            currentPlayer: nextPlayer,
            squaresStatus: newSquaresStatus,
            winner: winner
        });

    }

    render() {
        return (
            <div>
                <GameField 
                    squaresStatus = { this.state.squaresStatus }
                    playerMoveHandler = { this.playerMoveHandler }
                    start = {this.state.start}
                    winner = {this.state.winner}
                />
            </div>
        )
    }
}

export default Game;