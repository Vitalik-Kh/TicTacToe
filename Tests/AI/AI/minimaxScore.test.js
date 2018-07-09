import minimaxScore, {gameScore} from '../../../src/AI/AI/minimaxScore';
import State from '../../../src/AI/AI/State';

const currState = new State();
const field = [null, null, null, 
               'X', null, 'O', 
               null, 'X', null];
currState.init('X', 'normal');
currState.setField(field);

describe('minimaxScore test', () => {
    //let moveScore = minimaxScore(currState);
    describe('gameScore test', () => {
        test('test O-won', () => {
            const field = ['X', 'O', 'X', 
                            'O', 'O', 'X', 
                            'X', 'O', 'O'];
            currState.setField(field);
            currState.aiMovesCount = 5;
            currState.isTerminal();
            console.log(gameScore(currState), 'gameScore');
        });

        test('minimax score return', () => {
            const field = [null, null, null, 
                        'X', null, 'O', 
                        null, 'X', null];
            currState.setField(field);
            currState.aiMovesCount = 2;
            console.log(minimaxScore(currState), 'minimaxScore');
        })

    });
})