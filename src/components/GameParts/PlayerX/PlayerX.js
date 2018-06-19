import React from 'react';

import classes from './PlayerX.scss';
import { Transition } from 'react-transition-group';

const playerX = (props) => {
    const playerClasses = [classes.PlayerX];
    if (props.winner) { playerClasses.push(classes.Winner) }
    return (
        <Transition
            appear
            in = { props.canStartNextAnim }
            timeout = { 1500 }
            onEntered = { props.onWinAnimFinish } >
            
            <div className = { playerClasses.join(' ') }>
                <div className = { classes.Line_1 }></div>
                <div className = { classes.Line_2 }></div>
            </div>
        </Transition>
    )
    
}

export default playerX;