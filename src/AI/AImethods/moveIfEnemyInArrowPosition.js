import {v} from '../../utilities/states';
import preventDeadMoves from './preventDeadMoves';
import getPossibleMoves from '../utility/getPossibleMoves';

const moveIfEnemeyInArrowPosition = (data) => {
    const getBadMoveIfEnemeyInArrowPosition = () => {
        let badMove = null;
        const arrowIndexCombinations = [
            [6, 3, 0, 1, 2],
            [0, 1, 2, 5, 8],
            [2, 5, 8, 7, 6],
            [8, 7, 6, 3, 0]
        ];
        arrowIndexCombinations.forEach(indexComb => {
            const fieldCombination = indexComb.map(i => {
                return data.field[i]; }).join('');
            const re = data.player === v.X ? /OO/ : /XX/;
            if (fieldCombination.search(re) !== -1 && fieldCombination.length === 2) {
                console.log(fieldCombination.length, 'fieldCombination in Arrow Position');
                switch(indexComb[2]) {
                    case 0:
                        badMove = 8;
                        break;
                    case 8:
                        badMove = 0;
                        break;
                    case 2:
                        badMove = 6;
                        break;
                    case 6:
                        badMove = 2;
                        break;
                    default:
                        badMove = null;
                }
            }
        });
        console.log(badMove, 'badMove');
        return badMove;
    }

    let nextMove = null, possibleMoves = null;
    const badMove = getBadMoveIfEnemeyInArrowPosition();
    if (badMove !== null) {
        possibleMoves = preventDeadMoves(data, getPossibleMoves(data));
        const nextMoves =  possibleMoves.filter(move => move !== badMove )
        if (nextMoves) {
            const randomIndex = Math.floor(Math.random() * nextMoves.length);
            nextMove = nextMoves[randomIndex]; 
        } 
    }
    return nextMove;
}

export default moveIfEnemeyInArrowPosition;