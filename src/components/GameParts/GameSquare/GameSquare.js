import React from 'react';
import classes from './GameSquare.css';
import PlayerO from '../PlayerO/PlayerO';
import PlayerX from '../PlayerX/PlayerX';

const gameSquare = (props) => {
    let player = null;
    if (props.player == 'X') { 
        player = <PlayerX 
            winner = { props.winner } 
            onWinAnimFinish = { props.showModal }
            canStartNextAnim = { props.canStartNextAnim } /> 
    }
    if (props.player == 'O') { 
        player = <PlayerO 
            winner = {props.winner}
            onWinAnimFinish = { props.showModal }
            canStartNextAnim = { props.canStartNextAnim }  /> 
    }
    const squareClasses = [classes.GameSquare, classes['Square-' + props.squareID]]
    return (
        <div
            className={ squareClasses.join(' ') } 
            onClick = { 
                !props.inputDisabled ?
                () => props.clicked(props.squareID) :
                null
            } 
        >
            {player}
        </div>
    )
}

export default gameSquare;