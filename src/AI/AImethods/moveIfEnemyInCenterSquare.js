import validateMoves from '../utility/validateMoves';

const moveIfEnemyInCenterSquare = (data) => {
    let nextMoves = null, nextMove = null;
    if ( data.field[4] === data.enemy) {
        nextMoves = [0, 2, 6, 8];
        const validNextMoves = validateMoves(data, nextMoves);
        if (validNextMoves) {
            const randomIndex = Math.floor(Math.random() * validNextMoves.length);
            nextMove = validNextMoves[randomIndex];
        } 
    }
    return nextMove;
}

export default moveIfEnemyInCenterSquare;