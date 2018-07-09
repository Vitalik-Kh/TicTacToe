import State from './State';
import AIAction from './AIAction';
import minimaxScore from './minimaxScore';

function AI() {
    this.State = new State(); 

    this.init = function(aiPlayer, level) {
        this.State.init(aiPlayer, level);
    }
    
    this.makeMove = function(field) {
        
        this.State.setField(field);

        var availableSquares = this.State.getFreeSquares();
        
        var availableActions = availableSquares.map(function(square) {
            var action = new AIAction(square);
            var nextState = action.applyTo(this.State);
            action.minimaxVal = minimaxScore(nextState);
            return action;
        }.bind(this));

        if (this.State.aiSign === 'X') {
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
}

export default AI;