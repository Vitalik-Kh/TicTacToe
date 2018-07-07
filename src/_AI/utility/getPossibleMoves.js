const getPossibleMoves = (data) => {
    const possibleMoveIDs = [];
    for (let i=0; i<data.field.length; i++) {
        if (data.field[i] === null) {
            possibleMoveIDs.push(i);
        }
    }
    return possibleMoveIDs.length > 0 ? possibleMoveIDs : null;
}

export default getPossibleMoves;