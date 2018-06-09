import React from 'react';

import GameField from '../../components/GameParts/GameField';
import AI from '../../AI/AI';
import {checkForWinner} from '../../utilities/checkForWinner';
import Aux from '../../hoc/Auxy';
import Modal from '../../components/UI/Modal/Modal';
import StartMenu from '../../components/GameParts/StartMenu/StartMenu';
import {v} from '../../utilities/states';

class Game extends React.Component {
    state = {
        currentPlayer: v.X,
        playerX: v.human,
        playerO: v.AI,
        //X, O or null:
        squaresStatus: [null, null, null, 
                        null, null, null, 
                        null, null, null],
        winner: null,
        disableInput: true,
        showModal: true,
        playing: false
    }

    componentDidMount = () => {
        this.myComponentDidMountOrUpdate();
    }

    componentDidUpdate = () => {
        this.myComponentDidMountOrUpdate();
    }

    myComponentDidMountOrUpdate = () => {
        if (this.state.playing) {
            if (((this.state.playerX === v.AI && this.state.currentPlayer === v.X) ||
                (this.state.playerO === v.AI && this.state.currentPlayer === v.O)) &&
                !this.state.winner) {
                this.aiMove();
            } else if (!this.state.winner && this.state.disableInput === true) {
                this.setState({disableInput: false});
            } 
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
            const nextPlayer = this.state.currentPlayer === v.X ? v.O : v.X;
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
        //this.setState(prevState => ({showModal: !prevState.showModal}))
    }

    toggleGameMode = () => {
        const O = this.state.playerO;
        const X = this.state.playerX;
        if (O === v.AI || X === v.AI) {
            this.setState({
                playerO: v.human,
                playerX: v.human
            })
        } else if (O === v.human && X === v.human) {
            this.setState({
                playerX: v.human,
                playerO: v.AI
            });
        }
    }

    toggleXO = () => {
        if (this.state.playerX === v.AI || this.state.playerO === v.AI) {
            this.setState(prevState => {
                return ({
                    playerO: prevState.playerO === v.human ? v.AI : v.human,
                    playerX: prevState.playerX === v.human ? v.AI : v.human
                });
            });
        }  
    }

    playBtnClickHandler = () => {
        this.setState({ playing: true, showModal: false });
    }

    render() {
        let gameField = null;
        if (this.state.playing) {
            gameField =  <GameField 
                squaresStatus = { this.state.squaresStatus }
                playerMoveHandler = { this.humanMoveHandler }
                winner = { this.state.winner }
                inputDisabled = { this.state.disableInput }
            />
        }
        return (
            <Aux>
                <Modal 
                    visible = { this.state.showModal }
                    backdropClicked = { this.backdropClickHandler } >
                    <StartMenu 
                        toggleGameMode = { this.toggleGameMode }
                        toggleXO = { this.toggleXO }
                        X = { this.state.playerX }
                        O = { this.state.playerO }
                        playBtnClicked = { this.playBtnClickHandler } />
                </Modal>
                { gameField }
            </Aux>
            
        )
    }
}

export default Game;