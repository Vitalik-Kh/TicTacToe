const validateMoves = (data, moves) => {
    const validMoves = moves.filter(move => {
        return data.field[move] == null ? true : false;
    });
    return validMoves.length > 0 ? validMoves : null;
}

export default validateMoves;