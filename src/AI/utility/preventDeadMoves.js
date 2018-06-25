
const preventDeadMoves = (data, possibleMoveIDs) => {
    //last move in a line without result
    const getDeadMoves = () => {
        const deadMoves = [];
        data.winCombinationsIDs.forEach(combination => {
            let fieldCombination = [];
            combination.forEach(ID => {
                fieldCombination.push(data.field[ID]);
            })
            const fieldCombination_string = fieldCombination.join('');
            const matchedCombination = fieldCombination_string.match(/(O{1}X{1})|(X{1}O{1})/g);
            if (fieldCombination_string && matchedCombination) {
                if ( matchedCombination.join('').length === 2 &&
                        fieldCombination_string.length === 2 ) {
                    combination.forEach(ID => {
                        if (data.field[ID] == null) {
                            deadMoves.push(ID);
                        } 
                    })
                }
            } 
        });
        return deadMoves.length > 0 ? deadMoves : null;
    }

    console.log(possibleMoveIDs, 'possibleMoveIDs in prevDeadMoves');
    const getDeadMoves_data = getDeadMoves();
    let goodMoves = null;
    if (getDeadMoves_data) {
        goodMoves =  possibleMoveIDs.filter(ID => {
            if (getDeadMoves_data.findIndex(el => el === ID) !== -1) {
                return false
            } else { return true }
        })
        console.log(goodMoves, 'goodMoves in prevDeadMoves');
        return goodMoves.length > 0 ? goodMoves : possibleMoveIDs;
    }

    return possibleMoveIDs;
}

export default preventDeadMoves;