import State from './State';

function AIAction (pos) {
    this.movePos = pos;

    this.minimaxVal = 0;
    
    this.applyTo = function(oldState) {
        var nextState = new State(oldState);
        nextState.field[this.movePos] = oldState.turn;

        if (oldState.turn === oldState.aiSign) {
            nextState.aiMovesCount++;
        }

        nextState.advanceTurn();

        return nextState;
    }
}

AIAction.sortAscending = function(firstAct, seconAct) {
    if (firstAct.minimaxVal < seconAct.minimaxVal) {
        return -1;
    } else if (firstAct.minimaxVal > seconAct.minimaxVal) {
        return 1;
    } else {
        return 0;
    }
} 

AIAction.sortDescending = function(firstAct, seconAct) {
    if (firstAct.minimaxVal > seconAct.minimaxVal) {
        return -1;
    } else if (firstAct.minimaxVal < seconAct.minimaxVal) {
        return 1;
    } else {
        return 0;
    }
} 

export default AIAction;