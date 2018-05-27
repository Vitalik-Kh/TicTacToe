import React from 'react';

import classes from './GameField.css';
import GameSquare from './GameSquare/GameSquare';

const gameField = (props) => {
    const squareID = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let transformedGameSquares = squareID.map(id => {
        return <GameSquare key={id} fieldID={id} player={props.squaresStatus[id-1]}/>
    });
    return (
        <div className = {classes.GameField}>
            {transformedGameSquares}
        </div>
    )
}

export default gameField;