import React from 'react';
import classes from './GameSquare.css';
import classNames from 'classnames';
import PlayerO from '../PlayerO/PlayerO';
import PlayerX from '../PlayerX/PlayerX';

const gameSquare = (props) => {
    let player = null;
    if (props.player == 'X') { player = <PlayerX /> }
    if (props.player == 'O') { player = <PlayerO /> }
    return (
        <div
            className={classNames(classes.GameSquare, classes['Square-' + props.fieldID])}>
            {player}
        </div>
    )
}

export default gameSquare;