import React from 'react';

import classes from './PlayerX.css';

const playerX = () => {
    return (
        <div className = {classes.PlayerX}>
            <div className = {classes.Line_1}></div>
            <div className = {classes.Line_2}></div>
        </div>
    );
}

export default playerX;