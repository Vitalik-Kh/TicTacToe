import {v} from '../utilities/states';

import makeOrPreventWinMove from './AImethods/makeOrPreventWinMove';
import centerSquareMove from './AImethods/centerSquareMove';
import moveIfEnemyInCenterSquare from './AImethods/moveIfEnemyInCenterSquare';
import moveIfEnemyInTwoOppositeCorners from './AImethods/moveIfEnemyInTwoOppositeCorners';
import moveIfEnemeyInArrowPosition from './AImethods/moveIfEnemyInArrowPosition';
import makeSecondInLineMove from './AImethods/makeSecondInLineMove';
import makeRandomMove from './AImethods/makeRandomMove';
import makeArrowMovesCombination from './AImethods/makeArrowMovesCombination';

function AI(){
    let aiState = {
        player: v.O,
        level: v.normal,
        enemy: v.X,
        //X, O or null:
        field: [null, null, null, 
                null, null, null, 
                null, null, null],
        winCombinationsIDs: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        currCombination: null
    };
    
    this.setAiState = (player = v.X, level = 'normal') => {
        aiState = {
            ...aiState,
            player: player,
            level: level,
            enemy: player === v.X ? v.O : v.X,
        }
    }

    const setField = (field) => {
        aiState = {
            ...aiState,
            field: field
        }
    }

    const easyLevelMoves = () => {
        let makeOrPreventWinMove_data = makeOrPreventWinMove(aiState);
        if (aiState.level === 'easy') {
            const random = Math.floor(Math.random() * 2);
            if (!random) { makeOrPreventWinMove_data = null }
        }
        if (makeOrPreventWinMove_data !== null) {
            console.log('makeOrPreventWinMove');
            return makeOrPreventWinMove_data;
        }
        return null;
    }
 
    const normalLevelMoves = () => {
        const makeSecondInLineMove_data = makeSecondInLineMove(aiState);
        if (makeSecondInLineMove_data !== null) {
            console.log('makeSecondInLineMove');
            return makeSecondInLineMove_data;
        }
        return null;
    }

    const hardLevelMoves = () => {
        //if center square is free, move there
        const centerSquareMove_data = centerSquareMove(aiState);
        if (centerSquareMove_data) {
            console.log('centerSquareMove');
            return centerSquareMove_data;
        }
        const moveIfEnemyInCenterSquare_data = moveIfEnemyInCenterSquare(aiState);
        if (moveIfEnemyInCenterSquare_data !== null) {
            console.log('moveIfEnemyInCenterSquare');
            return moveIfEnemyInCenterSquare_data; 
        }
        const moveIfEnemyInTwoOppositeCorners_data = moveIfEnemyInTwoOppositeCorners(aiState);
        if (moveIfEnemyInTwoOppositeCorners_data !== null) {
            console.log('moveIfEnemyInTwoOppositeCorners');
            return moveIfEnemyInTwoOppositeCorners_data;
        }
        //when enemy placed both sides of one corner
        const moveIfEnemeyInArrowPosition_data = moveIfEnemeyInArrowPosition(aiState);
        if (moveIfEnemeyInArrowPosition_data !== null) {
            console.log('moveIfEnemeyInArrowPosition_data');
            return moveIfEnemeyInArrowPosition_data;
        }  
        return null;
    }

    this.makeMove = (field) => {
        setField(field);

        if (aiState.level === 'easy' ||
            aiState.level === 'normal' || 
            aiState.level === 'hard') { 
            
            const easyLevelMove = easyLevelMoves();
            if (easyLevelMove !== null) { return easyLevelMove } 
        }       
        if (aiState.level === 'hard') { 
            const hardLevelMove = hardLevelMoves();
            if (hardLevelMove !== null) { return hardLevelMove }
        }  
        if (aiState.level === 'normal' || 
            aiState.level === 'hard') { 
            
            const noramlLevelMove = normalLevelMoves();
            if (noramlLevelMove !== null) { return noramlLevelMove } 
        }
        
        return makeRandomMove(aiState); 
    }
}

export default new AI();