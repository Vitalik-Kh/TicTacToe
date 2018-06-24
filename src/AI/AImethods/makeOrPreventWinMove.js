import {v} from '../../utilities/states';

const makeOrPreventWinMove = (data) => {
    let nextWinMove = null;
    let nextPreventiveMove = null;
    
    data.fieldCombinationsIndexes.forEach(combination => {
        let fieldCombination = [];
        combination.forEach(ID => {
            fieldCombination.push(data.field[ID]);
        })
        const fieldCombination_string = fieldCombination.join('');
        const matchedCombination_enemy = data.player === v.X ? 
                                         fieldCombination_string.match(/O/g) : 
                                         fieldCombination_string.match(/X/g);
        const matchedCombination_player = data.player === v.X ? 
                                          fieldCombination_string.match(/X/g) : 
                                          fieldCombination_string.match(/O/g);
        if (fieldCombination_string && matchedCombination_enemy) {
            if ( matchedCombination_enemy.length === 2 &&
                 fieldCombination_string.length === 2 ) {
                combination.forEach(ID => {
                    if (data.field[ID] == null) {
                        nextPreventiveMove = ID;
                    } 
                })
            }
        } else if (fieldCombination_string && matchedCombination_player) {
            if ( matchedCombination_player.length === 2 &&
                 fieldCombination_string.length === 2 ) {
                combination.forEach(ID => {
                    if (data.field[ID] == null) {
                        nextWinMove = ID;
                    } 
                })
            }
        }
    });
    return nextWinMove !== null ? nextWinMove : nextPreventiveMove;
}

export default makeOrPreventWinMove;