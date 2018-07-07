import {v} from '../../utilities/states';

const makeArrowMovesCombination = (data) => {
    let nextMove = null;
    const cornerMoves = [0, 2, 6, 8];
    const arrowIndexCombinations = [
        [6, 3, 0, 1, 2],
        [0, 1, 2, 5, 8],
        [2, 5, 8, 7, 6],
        [8, 7, 6, 3, 0]
    ];
    if (data.field.join('').length === 0) {
        const nextMoves = [...cornerMoves];
        const randomIndex = Math.floor(Math.random() * nextMoves.length);
        nextMove = nextMoves[randomIndex];
        return nextMove; 
    }
    if (data.player === v.X && data.field.join('').length === 2) {
        let currentCornerMoveID = null, currArrowCombination = null;
        data.field.forEach((square, index) => {
            if (square === v.X) {
                currentCornerMoveID = index;
            }
        });
        arrowIndexCombinations.forEach(combination => {
            if (combination.findIndex(currentCornerMoveID) === 2) {
                currArrowCombination = [...combination];
            }
        })
        
    }
    return nextMove;
}

export default makeArrowMovesCombination;