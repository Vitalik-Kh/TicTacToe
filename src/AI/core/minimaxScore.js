import AIAction from './AIAction';

//Game score depends on if player won and how many steps it took him to win.
//Draw results in 0 score.
export const gameScore = function(state) {
    if(state.result === 'X-won') {
        return 10 - state.aiMovesCount;
    } else if(state.result === 'O-won') {
        return -10 + state.aiMovesCount;
    } else {
        //draw
        return 0;
    }
}

function minimaxScore(state) {
    if (state.isTerminal()) {
        return gameScore(state);
    } 
    else {
        var stateScore;
        if (state.turn === 'X') {
            stateScore = -1000;
        } else {
            stateScore = 1000;
        }

        var availableSquares = state.getFreeSquares();

        var nextStates = availableSquares.map(function(square) {
            var action = new AIAction(square);
            var nextState = action.applyTo(state);
            return nextState;
        });

        nextStates.forEach(function(nextState) {
            var nextScore = minimaxScore(nextState);
            if (state.turn === 'X') {
                if (nextScore > stateScore) {
                    stateScore = nextScore;
                }
            } else {
                if (nextScore < stateScore) {
                    stateScore = nextScore;
                }
            }
        });
        return stateScore;
    }

}

export default minimaxScore;