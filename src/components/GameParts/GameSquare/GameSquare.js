import React from 'react';
import classes from './GameSquare.css';

const gameSquare = (props) => {
    return (
        <div 
            className={[classes.GameSquare, classes['Square-' + props.fieldId]]}>
            {props.children}
        </div>
    )
}

export default gameSquare;