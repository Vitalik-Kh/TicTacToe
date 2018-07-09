import AIActionObj from './AIAction';
import State from './State';

describe('AIAction test', () => {
    let AIAction;
    const currState = new State();
    currState.init('X', 'normal');

    for (let i=1; i<=1; i++) {
        AIAction = null;
        AIAction = new AIActionObj(i);
        
        test('Position is set', function() {
            expect(AIAction.movePos).toBe(i);
        });

        describe('Applyto test', () => {
            const nextState = AIAction.applyTo(currState);
            console.log(nextState.field);

            test('Next state field updated', function() {
                expect(nextState.field[i]).not.toBe(currState.turn);
            });

            test('ai moves count incremented', () => {
                expect(nextState.aiMovesCount).toBe(currState.aiMovesCount+1);
            })
        })
        currState.advanceTurn();
    }
    
    describe('Test sort functions', () => {
        var actionsArr = [];
        var ActionForSort;
        for(let i=1; i<=5; i++) {
            ActionForSort = null;
            ActionForSort = new AIActionObj(i);
            ActionForSort.minimaxVal = Math.floor(Math.random() * 20);
            actionsArr.push(ActionForSort);
        }
        test('Test ascending', () => {
            console.log(actionsArr);
            actionsArr.sort(AIActionObj.sortDescending);
            console.log(actionsArr);
        })
    })
})
