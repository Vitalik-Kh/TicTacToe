import AIAction from '../core/AIAction';
import minimaxScore from '../core/minimaxScore';

var aiMove = function(state, newField) {
    var secondBestChanceLimit = null;
    var masterMoveChance = Math.floor(Math.random() * 100) + 1;
    var nextMove = null;

    if (state.level === 'easy') {
        secondBestChanceLimit = 60;
    } else if (state.level === 'normal') {
        secondBestChanceLimit = 20;
    } else {
        secondBestChanceLimit = 0;
    }

    state.setField(newField);

    var availableSquares = state.getFreeSquares();
    
    var availableActions = availableSquares.map(function(square) {
        var action = new AIAction(square);
        var nextState = action.applyTo(state);
        action.minimaxVal = minimaxScore(nextState);
        return action;
    }.bind(this));

    if (state.aiSign === 'X') {
        availableActions.sort(AIAction.sortDescending);
    } else {
        availableActions.sort(AIAction.sortAscending);
    }

    var bestActions = [availableActions[0]];
    for(var i=1; i<availableActions.length; i++) {
        if (availableActions[0].minimaxVal === availableActions[i].minimaxVal) {
            bestActions.push(availableActions[i]);
        }
    }

    var getBestMove = function() {
        var randomBestActionsIndex = Math.floor(Math.random() * bestActions.length)
        var nextAction = bestActions[randomBestActionsIndex];
        var nextMove = nextAction.movePos;
        return nextMove;
    }

    var getSecondBestMove = function() {
        var secondBestActionIndex = bestActions.length;
        var nextAction = availableActions[secondBestActionIndex];
        var nextMove = nextAction.movePos;
        return nextMove;
    }

    if (masterMoveChance <= secondBestChanceLimit) {
        if (availableActions.length > bestActions.length) {
            nextMove = getSecondBestMove();
        } else {
            nextMove = getBestMove();
        }
    } else {
        nextMove = getBestMove();
    }
    
    return nextMove;
}

export default aiMove;