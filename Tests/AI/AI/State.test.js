import State from '../../../src/AI/core/State';

const currState = new State();
currState.init('X', 'normal');

describe('State test', () => {
    console.log(currState);
    test('State.setField() works', () => {
        const field = [null, null, null, 
                        'X', null, 'O', 
                        null, 'X', null];
        currState.setField(field);
        let result = true;
        for (let i=0; i<9; i++) {
            if (currState.field[i] !== field[i]) {
                result = false;
            }
        }
        expect(result).toBe(true);
    });

    test('State.advanceTurn works', () => {
        currState.advanceTurn();
        expect(currState.turn).toBe('O');
    });

    test('State.getFreeSquares works', () => {
        const field = [null, null, null, 
                       'X', null, 'O', 
                       null, 'X', null];
        currState.setField(field);
        expect(currState.getFreeSquares().length).toBe(6);
    })

    describe('State.isTerminal works', () => {
        test.each([
            [['X', 'O', 'X', 
            'O', 'X', 'O', 
            'O', 'X', 'O']],

            [['X', 'O', 'X', 
            'X', 'X', 'O', 
            'O', 'X', 'O']],

            [['O', 'X', 'O', 
            'X', 'X', 'O', 
            'O', 'X', 'X']]
        ])('Test draw', (field) => {
            currState.setField(field);
            expect(currState.isTerminal()).toBe(true);
        });

        test.each([
            //test rows win
            [['X', 'X', 'X', 
              'O', 'O', 'X', 
              'O', 'X', 'O']],

            [['X', 'O', 'X', 
              'X', 'X', 'X', 
              'O', 'X', 'O']],

            [['O', 'X', 'O', 
              'X', 'X', 'O', 
              'X', 'X', 'X']],
            //test diagons win
            [['O', 'X', 'X',
              'X', 'X', 'O', 
              'X', 'O', 'X']],

            [['X', 'X', 'O',
              'O', 'X', 'O', 
              'X', 'O', 'X']],
            //test columns win
            [['X', 'X', 'O',
              'X', 'O', 'O', 
              'X', 'O', 'X']],

            [['X', 'X', 'O',
              'O', 'X', 'X', 
              'O', 'X', 'O']],

            [['O', 'X', 'X',
              'O', 'O', 'X', 
              'X', 'O', 'X']]
        ])('Test X won', (field) => {
            currState.setField(field);
            expect(currState.isTerminal()).toBe(true);
            expect(currState.result).toBe('X-won');
        });

        test.each([
            //test rows win
            [['O', 'O', 'O', 
              'X', 'X', 'O', 
              'X', 'O', 'X']],

            [['O', 'X', 'O', 
              'O', 'O', 'O', 
              'X', 'O', 'X']],

            [['X', 'O', 'X', 
              'O', 'O', 'X', 
              'O', 'O', 'O']],
            //test diagons win
            [['X', 'O', 'O',
              'O', 'O', 'X', 
              'O', 'X', 'O']],

            [['O', 'O', 'X',
              'X', 'O', 'X', 
              'O', 'X', 'O']],
            //test columns win
            [['O', 'O', 'X',
              'O', 'X', 'X', 
              'O', 'X', 'O']],

            [['X', 'O', 'X',
              'O', 'O', 'X', 
              'X', 'O', 'O']],

            [['X', 'O', 'O',
              'X', 'X', 'O', 
              'O', 'X', 'O']]
        ])('Test O won', (field) => {
            currState.setField(field);
            expect(currState.isTerminal()).toBe(true);
            expect(currState.result).toBe('O-won');
        });
        
    })
});