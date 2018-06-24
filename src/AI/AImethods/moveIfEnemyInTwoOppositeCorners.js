import validateMoves from '../utility/validateMoves';

const moveIfEnemyInTwoOppositeCorners = (data) => {
    let nextMoves = null, nextMove = null;
    if ( (data.field[0] === data.enemy && data.field[8] === data.enemy) ||
          data.field[2] === data.enemy && data.field[6] === data.enemy) {
        nextMoves = [1, 3, 5, 7];
        const validNextMoves = validateMoves(data, nextMoves);
        if (validNextMoves) {
            const randomIndex = Math.floor(Math.random() * validNextMoves.length);
            nextMove = validNextMoves[randomIndex];
        }
    }
    return nextMove;
}

export default moveIfEnemyInTwoOppositeCorners;