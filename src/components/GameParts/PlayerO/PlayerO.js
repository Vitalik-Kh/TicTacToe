import React from 'react';
import classes from './PlayerO.css';
import {Transition} from 'react-transition-group';

const playerO = (props) => {
    const playerClasses = [classes.PlayerO];
    if (props.winner) {playerClasses.push(classes.Winner)}
    return (
        <Transition
            appear 
            in = { props.canStartNextAnim } 
            timeout = { 1500 }
            onEntered = { props.onWinAnimFinish } >
            
            <div className={playerClasses.join(' ')}></div>
        </Transition>
    );
}

export default playerO;