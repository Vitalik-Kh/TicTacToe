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
        playing: false,
        newGame: true,
        temp: false
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
        this.playerMove(AImove)
    }

    humanMoveHandler = (squareID) => {
        this.playerMove(squareID);
    }

    playerMove = (squareID) => {
        if (this.state.squaresStatus[squareID] === null) {
            const newSquaresStatus = [...this.state.squaresStatus];
            newSquaresStatus[squareID] = this.state.currentPlayer;
            const nextPlayer = this.state.currentPlayer === v.X ? v.O : v.X;
            const winner = checkForWinner(newSquaresStatus);
        
            this.setState({
                currentPlayer: nextPlayer,
                squaresStatus: newSquaresStatus,
                winner: winner,
                disableInput: true
            });
        }
    }

    backdropClickHandler = () => {
        this.setState(prevState => ({showModal: !prevState.showModal}))
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
        this.setState({ playing: true, showModal: false }) }
    
    playAgainBtnClickedHandler = () => {
        this.setState({
            currentPlayer: v.X,
            //X, O or null:
            squaresStatus: [null, null, null, 
                            null, null, null, 
                            null, null, null],
            winner: null,
            disableInput: true,
            showModal: false,
            playing: true
        })
    }

    newGameBtnClickedHandler = () => {
        this.setState({
            currentPlayer: v.X,
            //X, O or null:
            squaresStatus: [null, null, null, 
                            null, null, null, 
                            null, null, null],
            winner: null,
            disableInput: true,
            newGame: true
        })
    }

    newGameModeOFFtoggle = () => { this.setState({ newGame: false }) }

    showModal = () => { this.setState({ showModal: true, playing: false })}

    render() {
        let gameField = null;
        if (this.state.playing) {
            gameField =  <GameField 
                squaresStatus = { this.state.squaresStatus }
                playerMoveHandler = { this.humanMoveHandler }
                winner = { this.state.winner }
                inputDisabled = { this.state.disableInput }
                showModal = { this.showModal }
            />
        }
        return (
            <Aux>
                <Modal 
                    visible = { this.state.showModal }
                    backdropClicked = { this.backdropClickHandler }
                    onClosed = { this.newGameModeOFFtoggle } >
                    <StartMenu 
                        toggleGameMode = { this.toggleGameMode }
                        toggleXO = { this.toggleXO }
                        X = { this.state.playerX }
                        O = { this.state.playerO }
                        playBtnClicked = { this.playBtnClickHandler }
                        playAgainBtnClicked = { this.playAgainBtnClickedHandler }
                        newGameBtnClicked = { this.newGameBtnClickedHandler }
                        newGame = { this.state.newGame } />
                </Modal>
                { gameField }
                <button onClick = {this.backdropClickHandler}>Click</button>
            </Aux>
            
        )
    }
}

export default Game;