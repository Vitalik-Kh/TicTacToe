import State from './core/State';
import aiMove from './core/aiMove';

function AI() {
    this.state = new State(); 

    this.init = function(aiPlayer, level) {
        this.state.init(aiPlayer, level);
    }
    
    this.makeMove = function(newField) {
        return aiMove(this.state, newField);
    }
}

export default AI;