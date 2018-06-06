import React from 'react';

import GameField from '../../components/GameParts/GameField';
import AI from '../../AI/AI';
import {checkForWinner} from '../../utilities/checkForWinner';
import Aux from '../../hoc/Auxy';
import Modal from '../../components/UI/Modal/Modal';
import StartMenu from '../../components/GameParts/StartMenu/StartMenu';

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
        disableInput: true,
        showModal: true,
        newGame: true
    }

    componentDidMount = () => {
        this.myComponentDidMountOrUpdate();
    }

    componentDidUpdate = () => {
        this.myComponentDidMountOrUpdate();
    }

    myComponentDidMountOrUpdate = () => {
        if (((this.state.playerX.AI && this.state.currentPlayer === 'X') ||
             (this.state.playerO.AI && this.state.currentPlayer === 'O')) &&
             !this.state.winner) {
            this.aiMove();
        } else if (!this.state.winner && this.state.disableInput === true) {
            this.setState({disableInput: false});
        } 
    }

    aiMove = () => {            
        const AImove = AI(this.state.squaresStatus);
        this.playerMove(AImove, false)
    }

    humanMoveHandler = (squareID) => {
        this.playerMove(squareID, true);
    }

    playerMove = (squareID, disable) => {
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
                disableInput: disable
            });
        }
    }

    backdropClickHandler = () => {
        this.setState(prevState => ({showModal: !prevState.showModal}))
    }

    render() {
        return (
            <Aux>
                <Modal 
                    visible = { this.state.showModal }
                    backdropClicked = { this.backdropClickHandler } >
                    <StartMenu newGame = { this.state.newGame }/>
                </Modal>
                <GameField 
                    squaresStatus = { this.state.squaresStatus }
                    playerMoveHandler = { this.humanMoveHandler }
                    winner = { this.state.winner }
                    inputDisabled = { this.state.disableInput }
                />
            </Aux>
            
        )
    }
}

export default Game;