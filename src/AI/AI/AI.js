import State from './State';
import AIAction from './AIAction';
import minimaxScore from './minimaxScore';

function AI() {
    this.State = new State(); 

    this.init = function(aiPlayer, level) {
        this.State.init(aiPlayer, level);
        console.log(this.State);
    }
    
    this.makeMove = function(field) {
        
        this.State.field = field.map(function(x) { return x });

        var availableSquares = this.State.getFreeSquares();
        
        var availableActions = availableSquares.map(function(square) {
            var action = new AIAction(square);
            var nextState = action.applyTo(this.State);
            console.log('ai get minimax is next');
            action.minimaxVal = minimaxScore(nextState);
            console.log('---- AFTER ai get minimax ----');
            return action;
        }.bind(this));

        if (this.State.aiSign === 'X') {
            availableActions.sort(AIAction.sortDescending);
        } else {
            availableActions.sort(AIAction.sortAscending);
        }

        var nextAction = availableActions[0];
        var nextMove = nextAction.pos;
        
        return nextMove;
    }
}

export default AI;