import State from './core/State';
import hardMove from './aiMoves/hardMove';

function AI() {
    this.state = new State(); 

    this.init = function(aiPlayer, level) {
        this.state.init(aiPlayer, level);
    }
    
    this.makeMove = function(field) {
        if (this.state.level === 'hard') {
            return hardMove(this.state, field);
        }
        
    }
}

export default AI;