import {v} from '../utilities/states';

const ai = (field, player) => {
    const playWith = 'O';
    const enemy = player === v.X ? v.O : v.X;
    const  fieldCombinationsIndexes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const makeOrPreventWinMove = () => {
        let nextWinMove = null;
        let nextPreventiveMove = null;
        
        fieldCombinationsIndexes.forEach(combination => {
            let fieldCombination = [];
            combination.forEach(ID => {
                fieldCombination.push(field[ID]);
            })
            const fieldCombination_string = fieldCombination.join('');
            const matchedCombination_enemy = player === v.X ? 
                                             fieldCombination_string.match(/O/g) : 
                                             fieldCombination_string.match(/X/g);
            const matchedCombination_player = player === v.X ? 
                                              fieldCombination_string.match(/X/g) : 
                                              fieldCombination_string.match(/O/g);
            if (fieldCombination_string && matchedCombination_enemy) {
                if ( matchedCombination_enemy.length === 2 &&
                     fieldCombination_string.length === 2 ) {
                    combination.forEach(ID => {
                        if (field[ID] == null) {
                            nextPreventiveMove = ID;
                        } 
                    })
                }
            } else if (fieldCombination_string && matchedCombination_player) {
                if ( matchedCombination_player.length === 2 &&
                     fieldCombination_string.length === 2 ) {
                    combination.forEach(ID => {
                        if (field[ID] == null) {
                            nextWinMove = ID;
                        } 
                    })
                }
            }
        });
        return nextWinMove !== null ? nextWinMove : nextPreventiveMove;
    }

    const centerSquareMove = () => {
        let nextMove = null;
        if (field[4] === null) {
            nextMove = 4;
        }
        return nextMove;
    }

    //last move in a line without result
    const getDeadMoves = () => {
        const deadMoves = [];
        fieldCombinationsIndexes.forEach(combination => {
            let fieldCombination = [];
            combination.forEach(ID => {
                fieldCombination.push(field[ID]);
            })
            const fieldCombination_string = fieldCombination.join('');
            const matchedCombination = fieldCombination_string.match(/(O{1}X{1})|(X{1}O{1})/g);
            if (fieldCombination_string && matchedCombination) {
                if ( matchedCombination.join('').length === 2 &&
                     fieldCombination_string.length === 2 ) {
                    combination.forEach(ID => {
                        if (field[ID] == null) {
                            deadMoves.push(ID);
                        } 
                    })
                }
            } 
        });
        return deadMoves.length > 0 ? deadMoves : null;
    }

    const preventDeadMoves = (possibleMoveIDs) => {
        const getDeadMoves_data = getDeadMoves();
        if (getDeadMoves_data) {
            return possibleMoveIDs.filter(ID => {
                if (getDeadMoves_data.findIndex(el => el === ID) !== -1) {
                    return false
                } else { return true }
            })
        }

        return possibleMoveIDs;
    }

    const moveIfEnemyInCenterSquare = () => {
        let nextMoves = null, nextMove = null;
        if ( field[4] === enemy) {
            nextMoves = [0, 2, 6, 8];
            const validNextMoves = validateNextMoves(nextMoves);
            const randomIndex = Math.floor(Math.random() * validNextMoves.length);
            nextMove = validNextMoves[randomIndex];
        }
        return nextMove;
    }

    const moveIfEnemyInTwoOppositeCorners = () => {
        let nextMoves = null, nextMove = null;
        if ( (field[0] === enemy && field[8] === enemy) ||
              field[2] === enemy && field[6] === enemy) {
            nextMoves = [1, 3, 5, 7];
            const validNextMoves = validateNextMoves(nextMoves);
            const randomIndex = Math.floor(Math.random() * validNextMoves.length);
            nextMove = validNextMoves[randomIndex];
        }
        return nextMove;
    }

    //when enemy placed both sides of one corner
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
                return field[i]; }).join('');
            const re = player === v.X ? /\w*O\w*O\w*/ : /\w*X\w*X\w*/;
            if (fieldCombination.search(re) !== -1) {
                console.log(indexComb,'indexComb');
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
                    default:
                        badMove = null;
                }
            }
        });
        console.log(badMove, 'badMove');
        return badMove;
    }

    const moveIfEnemeyInArrowPosition = () => {
        let nextMove = null;
        const possibleMoves = preventDeadMoves(getPossibleMoves());
        const badMove = getBadMoveIfEnemeyInArrowPosition();
        if (badMove !== null) {
            const nextMoves =  possibleMoves.filter(move => move !== badMove )
            console.log(nextMoves,'nextMoves');
            const validNextMoves = validateNextMoves(nextMoves);
            const randomIndex = Math.floor(Math.random() * validNextMoves.length);
            nextMove = validNextMoves[randomIndex]; 
        }
        return nextMove;
    }


    const validateNextMoves = (nextMoves) => {
        const validNextMoves = nextMoves.filter(move => {
            return field[move] == null ? true : false;
        });
        return validNextMoves;
    }

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
        const makeOrPreventWinMove_data = makeOrPreventWinMove();
        let possibleMoves = getPossibleMoves();
        if (makeOrPreventWinMove_data !== null) {
            console.log('makeOrPreventWinMove');
            return makeOrPreventWinMove_data;
        }
        const centerSquareMove_data = centerSquareMove();
        if (centerSquareMove_data) {
            console.log('centerSquareMove');
            return centerSquareMove_data;
        }
        const moveIfEnemyInCenterSquare_data = moveIfEnemyInCenterSquare();
        if (moveIfEnemyInCenterSquare_data !== null) {
            console.log('moveIfEnemyInCenterSquare');
            return moveIfEnemyInCenterSquare_data; 
        }
        const moveIfEnemyInTwoOppositeCorners_data = moveIfEnemyInTwoOppositeCorners();
        if (moveIfEnemyInTwoOppositeCorners_data !== null) {
            console.log('moveIfEnemyInTwoOppositeCorners');
            return moveIfEnemyInTwoOppositeCorners_data;
        }
        const moveIfEnemeyInArrowPosition_data = moveIfEnemeyInArrowPosition();
        if (moveIfEnemeyInArrowPosition_data !== null) {
            console.log('moveIfEnemeyInArrowPosition_data');
            return moveIfEnemeyInArrowPosition_data;
        } 

        let possibleMoveIDs = preventDeadMoves(possibleMoves);   
        const randomIndex = Math.round(Math.random() * (possibleMoveIDs.length-1));
        console.log('random move');
        return possibleMoveIDs[randomIndex];
    }

    return makeMove();
}

export default ai;