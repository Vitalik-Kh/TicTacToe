import React from 'react';

import classes from './GameField.css';
import GameSquare from './GameSquare/GameSquare';
//
const gameField = (props) => {
    const squareID = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let transformedGameSquares = squareID.map(id => {
        return (
            <GameSquare 
                key = { id } 
                squareID = { id } 
                player = { props.squaresStatus[id] }
                clicked = { props.playerMoveHandler } 
                inputDisabled = { props.inputDisabled }
                winner = { props.winner ? 
                           props.winner.winIDs.join('').search(id) !== -1 ? true : false :
                           false }
            />
        )
    });

    return (
        <div className = {classes.GameField}>
            {transformedGameSquares}
        </div>
    )
}

export default gameField;