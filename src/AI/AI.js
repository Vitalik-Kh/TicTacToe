
const ai = (field) => {
    const getPossibleMoves = () => {
        const possibleMoveIDs = [];
        for (let i=0; i<field.length; i++) {
            if (field[i] === null) {
                possibleMoveIDs.push(i);
            }
        }
        return possibleMoveIDs;
    }

    const makeMove = () => {
        const possibleMoveIDs = getPossibleMoves();
        const randomIndex = Math.round(Math.random() * (possibleMoveIDs.length-1));
        return possibleMoveIDs[randomIndex];
    }

    return makeMove();
}

export default ai;