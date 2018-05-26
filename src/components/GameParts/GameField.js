import React from 'react';

import GameSquare from './GameSquare/GameSquare';
const id = 1;
const gameField = (props) => {
    return <GameSquare fieldId={id} />
}

export default gameField;