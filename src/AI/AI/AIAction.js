import State from './State';

function AIAction (pos) {
    this.movePos = pos;

    this.minimaxVal = 0;
    
    this.applyTo = function(oldState) {
        var nextState = new State(oldState);
        //console.log(this.movePos, 'this.movePos');
        nextState.field[this.movePos] = oldState.turn;

        if (oldState.turn === oldState.aiSign) {
            nextState.aiMovesCount++;
            //console.log(nextState.aiMovesCount, 'movesCount++')
        }

        nextState.advanceTurn();

        return nextState;
    }
}

AIAction.prototype.sortAscending = function(firstAct, seconAct) {
    if (firstAct.minimaxVal < seconAct.minimaxVal) {
        return -1;
    } else if (firstAct.minimaxVal > seconAct.minimaxVal) {
        return 1;
    } else {
        return 0;
    }
} 

AIAction.prototype.sortDescending = function(firstAct, seconAct) {
    if (firstAct.minimaxVal > seconAct.minimaxVal) {
        return -1;
    } else if (firstAct.minimaxVal < seconAct.minimaxVal) {
        return 1;
    } else {
        return 0;
    }
} 

export default AIAction;