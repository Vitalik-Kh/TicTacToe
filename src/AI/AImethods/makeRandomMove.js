import getPossibleMoves from '../utility/getPossibleMoves';
import preventDeadMoves from './preventDeadMoves';

const makeRandomMove = (data) => {
    let nextMove = null, nextMoves = null;
    const possibleMoves = getPossibleMoves(data);
    const noDeadPossibleMoves = preventDeadMoves(data, possibleMoves);
    nextMoves = noDeadPossibleMoves ? noDeadPossibleMoves : possibleMoves;   
    const randomIndex = Math.round(Math.random() * (nextMoves.length-1));
    console.log('random move');
    nextMove = nextMoves[randomIndex];
    return nextMove;
}

export default makeRandomMove;