import {v} from '../../utilities/states';

const makeSecondInLineMove = (data) => {
    const getSecondInLineMoves = () => {
        const nextMoves = [];
        data.winCombinationsIDs.forEach(combination => {
            let fieldCombination = [];
            combination.forEach(ID => {
                fieldCombination.push(data.field[ID]);
            })
            const fieldCombination_string = fieldCombination.join('');
            const re = data.player === v.X ? /X/ : /O/;
            if (fieldCombination_string.search(re) !== -1 && 
                fieldCombination_string.length === 1) {
                combination.forEach(ID => {
                    if (data.field[ID] == null) {
                        nextMoves.push(ID);
                    }
                })
            }
        });
        return nextMoves.length > 0 ? nextMoves : null;
    }

    let nextMove = null;
    const nextMoves = getSecondInLineMoves();
    console.log(nextMoves, 'NextMoves secondInLine');
    if (nextMoves) {
        const randomIndex = Math.floor(Math.random() * nextMoves.length);
        nextMove = nextMoves[randomIndex]; 
    }
    console.log(nextMove, 'secondInLine move');
    return nextMove;
}

export default makeSecondInLineMove;