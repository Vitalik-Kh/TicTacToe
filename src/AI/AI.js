import {v} from '../utilities/states';

import makeOrPreventWinMove from './AImethods/makeOrPreventWinMove';
import centerSquareMove from './AImethods/centerSquareMove';
import moveIfEnemyInCenterSquare from './AImethods/moveIfEnemyInCenterSquare';
import moveIfEnemyInTwoOppositeCorners from './AImethods/moveIfEnemyInTwoOppositeCorners';
import moveIfEnemeyInArrowPosition from './AImethods/moveIfEnemyInArrowPosition';
import makeSecondInLineMove from './AImethods/makeSecondInLineMove';
import makeRandomMove from './AImethods/makeRandomMove';

const ai = (field, player, level) => {
    const aiState = {
        field: field,
        player: player,
        enemy: player === v.X ? v.O : v.X,
        fieldCombinationsIndexes:[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    };

    const makeMove = () => {
        const makeOrPreventWinMove_data = makeOrPreventWinMove(aiState);
        if (makeOrPreventWinMove_data !== null) {
            console.log('makeOrPreventWinMove');
            return makeOrPreventWinMove_data;
        }
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
        const makeSecondInLineMove_data = makeSecondInLineMove(aiState);
        if (makeSecondInLineMove_data !== null) {
            console.log('makeSecondInLineMove');
            return makeSecondInLineMove_data;
        }

        return makeRandomMove(aiState);
        
    }
    
    return makeMove();
}

export default ai;