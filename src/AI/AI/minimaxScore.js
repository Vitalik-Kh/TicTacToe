import AIAction from './AIaction';

var gameScore = function(state) {
    //console.log(state.aiMovesCount, 'ai moves count');
    //console.log(state.result, 'state result');
    if(state.result === 'X-won') {
        return 10 - state.aiMovesCount;
    } else if(state.result === 'O-won') {
        return -10 + state.aiMovesCount;
    } else {
        //draw
        return 0;
    }
}

var count = 0;

function minimaxScore(state) {
    //console.log(state.turn, 'state turn');
    count++;
    //console.log(count);
    //console.log(state.isTerminal());
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
        //console.log(availableSquares, 'available squares');

        var nextStates = availableSquares.map(function(square) {
            var action = new AIAction(square);
            var nextState = action.applyTo(state);
            return nextState;
        });

        nextStates.forEach(function(nextState) {
            var nextScore = minimaxScore(nextState);
            //console.log(nextScore, 'next score');
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
        //console.log(stateScore, 'stateScore in the end')
        return stateScore;
    }

}


export default minimaxScore;