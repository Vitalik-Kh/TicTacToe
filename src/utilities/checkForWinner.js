//return null or object with winIds array and winPlayer string
export const checkForWinner = (arr) => {
    const  winCombinations = {
        1: [0, 1, 2],
        2: [3, 4, 5],
        3: [6, 7, 8],
        4: [0, 3, 6],
        5: [1, 4, 7],
        6: [2, 5, 8],
        7: [0, 4, 8],
        8: [2, 4, 6]
    }
    let winner = null;
    Object.keys(winCombinations).map(key => {
        const winComb = winCombinations[key];
        if ((arr[winComb[0]] === 'O' || arr[winComb[0]] === 'X') && 
             arr[winComb[0]] === arr[winComb[1]] && 
             arr[winComb[1]] === arr[winComb[2]]) {
            winner = {
                winIDs: winComb,
                winPlayer: arr[winComb[0]]
            };
        }
    });
    return winner;
}