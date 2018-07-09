function State(oldState) {
    this.aiSign = 'O';
    this.enemySign = 'X';
    this.level = 'normal';
    this.aiMovesCount = 0;
    //X, O or null:
    this.field = [null, null, null, 
                  null, null, null, 
                  null, null, null];
    this.result = 'playing';
    this.turn = '';

    //construct from provided state
    if (oldState) {
        this.aiSign = oldState.aiSign;
        this.enemySign = oldState.enemySign;
        this.level = oldState.level;
        this.aiMovesCount = oldState.aiMovesCount;
        this.field = oldState.field.map(function(square) { return square });
        this.result = oldState.result;
        this.turn = oldState.turn;
    }

    this.init = function(aiPlayer, level) {
        //set players
        if (aiPlayer === 'X') {
            this.aiSign = 'X';
            this.enemySign = 'O';
            this.turn = 'X';
        } else {
            this.aiSign = 'O';
            this.enemySign = 'X';
            this.turn = 'O';
        }
        //set level
        this.level = level;
    }

    this.setField = function(newField) {
        this.field = newField.map(function(square) { return square });
    }

    this.advanceTurn = function() {
        this.turn = this.turn === 'X' ? 'O' : 'X';
    }

    this.getFreeSquares = function() {
        var indexes = [];
        for (var i=0; i<9; i++) {
            if (this.field[i] === null) {
                indexes.push(i);
            }
        }
        return indexes;
    }

    this.isTerminal = () => {
        var field = this.field.map(function(i) { return i });;
        //check rows
        for (var i=0; i<=6; i+=3) {
            if (field[i] !== null && field[i] === field[i+1] && field[i] === field[i+2]) {
                this.result = field[i] + '-won';
                return true;
            }
        }
        //check columns
        for (var i=0; i<=2; i++) {
            if (field[i] !== null && field[i] === field[i+3] & field[i] === field[i+6]) {
                this.result = field[i] + '-won';
                return true;
            }
        }
        //check diagonals
        for (var i=0, j=4; i<=2; i+=2, j-=2) {
            if (field[i] !== null && field[i] === field[j+i] && field[i] === field[i + j*2]) {
                this.result = field[i] + '-won';
                return true;
            }
        }
        //check draw
        var freeSquares = this.getFreeSquares();
        if (freeSquares.length === 0) {
            this.result = 'draw';
            return true;
        } else {
            return false;
        }

    }
}

export default State;