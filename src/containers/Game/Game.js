import React from 'react';

import GameField from '../../components/GameParts/GameField';
import AI, {AIobj} from '../../AI/AI';
import {checkForWinner} from '../../utilities/checkForWinner';
import Aux from '../../hoc/Auxy';
import Modal from '../../components/UI/Modal/Modal';
import StartMenu from '../../components/GameParts/StartMenu/StartMenu';
import {v} from '../../utilities/states';
import ScoreCount from '../../components/GameParts/ScoreCount/ScoreCount';

class Game extends React.Component {
    state = {
        currentPlayer: v.X,
        level: v.normal,
        playerX: v.human,
        playerO: v.AI,
        //X, O or null:
        squaresStatus: [null, null, null, 
                        null, null, null, 
                        null, null, null],
        winner: {
            winIDs: null,
            winPlayer: null,
            draw: false
        },
        disableInput: true,
        playing: false,
        score: {
            X: 0,
            O: 0,
            draw: 0
        }
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
                !this.state.winner.winIDs && !this.state.winner.draw) {
                this.aiMove();
            } else if (!this.state.winner.winIDs && !this.state.winner.draw && 
                        this.state.disableInput === true) {
                this.setState({disableInput: false});
            } 
        }
    }

    aiMove = () => {
        const AImove = AI(this.state.squaresStatus, 
                          this.state.playerX === v.human ? v.O : v.X,
                          this.state.level);
        setTimeout(() => {
            this.playerMove(AImove);
        }, 300);
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

    toggleGameModeHandler = () => {
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

    toggleXOHandler = () => {
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
        this.setState({ playing: true }) }
    
    playAgainBtnClickedHandler = () => {
        const newScore = { ...this.state.score };
        if (this.state.winner.winPlayer) {
            newScore[this.state.winner.winPlayer] += 1;
        } else if (this.state.winner.draw) {
            newScore.draw += 1;
        }
        
        this.setState({
            currentPlayer: v.X,
            //X, O or null:
            squaresStatus: [null, null, null, 
                            null, null, null, 
                            null, null, null],
            winner: {
                winIDs: null,
                winPlayer: null,
                draw: false
            },
            disableInput: true,
            playing: true,
            score: {...newScore}
        })
    }

    newGameBtnClickedHandler = () => {
        this.setState({
            currentPlayer: v.X,
            playerX: v.human,
            playerO: v.AI,
            //X, O or null:
            squaresStatus: [null, null, null, 
                            null, null, null, 
                            null, null, null],
            winner: {
                winIDs: null,
                winPlayer: null,
                draw: false
            },
            disableInput: true,
            playing: false,
            score: {
                X: 0,
                O: 0,
                draw: 0
            }
        })
    }

    playingStateToggle = () => { this.setState(prevState => ({ playing: !prevState.playing })) }

    backdropClickHandler = () => {
        if ( this.state.winner.winIDs || this.state.winner.draw ) {
            this.playAgainBtnClickedHandler();
        }
    }

    changeLevelHandler = (newLevel) => {
        if (newLevel !== this.state.level) {
            this.setState({ level: newLevel });
        }
    }

    render() {
        let gameField = null;
        if (this.state.playing) {
            gameField =  
                <Aux>
                    <GameField 
                        squaresStatus = { this.state.squaresStatus }
                        playerMoveHandler = { this.humanMoveHandler }
                        winner = { this.state.winner }
                        inputDisabled = { this.state.disableInput }
                        showModal = { this.playingStateToggle }
                    />
                    <ScoreCount 
                        score = { this.state.score } 
                        currentPlayer = { this.state.currentPlayer } />
                </Aux>
        }
        return (
            <Aux>
                <Modal 
                    visible = { !this.state.playing }
                    backdropClicked = { this.backdropClickHandler } >
                    <StartMenu 
                        toggleGameMode = { this.toggleGameModeHandler }
                        toggleXO = { this.toggleXOHandler }
                        X = { this.state.playerX }
                        O = { this.state.playerO }
                        playBtnClicked = { this.playBtnClickHandler }
                        playAgainBtnClicked = { this.playAgainBtnClickedHandler }
                        newGameBtnClicked = { this.newGameBtnClickedHandler }
                        playing = { this.state.playing }
                        winner = { this.state.winner }
                        level = { this.state.level }
                        changeLevel = { this.changeLevelHandler } />
                </Modal>
                { gameField }
            </Aux>
            
        )
    }
}

export default Game;