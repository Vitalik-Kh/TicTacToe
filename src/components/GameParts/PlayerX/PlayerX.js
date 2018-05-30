import React from 'react';

import classes from './PlayerX.css';

const playerX = (props) => {
    const playerClasses = [classes.PlayerX];
    if (props.winner) {playerClasses.push(classes.Winner)}
    return (
        <div className = {playerClasses.join(' ')}>
            <div className = {classes.Line_1}></div>
            <div className = {classes.Line_2}></div>
        </div>
    );
}

export default playerX;