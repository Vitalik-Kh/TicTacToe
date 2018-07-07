const centerSquareMove = (data) => {
    let nextMove = null;
    if (data.field[4] === null) {
        nextMove = 4;
    }
    return nextMove;
}

export default centerSquareMove;