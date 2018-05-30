import React from 'react';
import classes from './GameSquare.css';
import PlayerO from '../PlayerO/PlayerO';
import PlayerX from '../PlayerX/PlayerX';

const gameSquare = (props) => {
    let player = null;
    if (props.player == 'X') { player = <PlayerX winner = {props.winner} /> }
    if (props.player == 'O') { player = <PlayerO winner = {props.winner} /> }
    const squareClasses = [classes.GameSquare, classes['Square-' + props.squareID]]
    return (
        <div
            className={ squareClasses.join(' ') } 
            onClick = { () => props.clicked(props.squareID) } >
            {player}
        </div>
    )
}

export default gameSquare;