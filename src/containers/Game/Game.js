import React from 'react';

import GameField from '../../components/GameParts/GameField';

class Game extends React.Component {
    state = {
        currentPlayer: 'X',
        //X, O or null:
        squaresStatus: [null, null, 'X', 
                        null, 'O', 'O', 
                        'X', null, null]

    }
    render() {
        return (
            <div>
                <GameField 
                    squaresStatus = { this.state.squaresStatus }
                />
            </div>
        )
    }
}

export default Game;