import React from 'react';
import classes from './PlayerO.css';

const playerO = (props) => {
    const playerClasses = [classes.PlayerO];
    if (props.winner) {playerClasses.push(classes.Winner)}
    return (
        <div className={playerClasses.join(' ')}></div>
    );
}

export default playerO;