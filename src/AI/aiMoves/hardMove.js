import AIAction from '../core/AIAction';
import minimaxScore, {count, setCountToZero} from '../core/minimaxScore';

var hardMove = function(state, field) {
    state.setField(field);
        var availableSquares = state.getFreeSquares();
        
        var availableActions = availableSquares.map(function(square) {
            var action = new AIAction(square);
            var nextState = action.applyTo(state);
            action.minimaxVal = minimaxScore(nextState);
            console.log(count, 'number of recursins');
            setCountToZero();
            return action;
        }.bind(this));

        if (state.aiSign === 'X') {
            availableActions.sort(AIAction.sortDescending);
        } else {
            availableActions.sort(AIAction.sortAscending);
        }

        console.log(availableActions, 'availableActions');
        const nextActions = [availableActions[0]];
        for(var i=1; i<availableActions.length; i++) {
            if (availableActions[0].minimaxVal === availableActions[i].minimaxVal) {
                nextActions.push(availableActions[i]);
            }
        }

        var randomIndex = Math.floor(Math.random() * nextActions.length)
        var nextAction = nextActions[randomIndex];
        var nextMove = nextAction.movePos;
        
        return nextMove;
}

export default hardMove;