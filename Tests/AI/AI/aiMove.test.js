describe('aiMove test', () => {
    test('Test masterMoveChance bounderies are from 1 to 100', () => {
        var masterMoveChance = 1;
        var result = false;
        for (var i=1; i<=100; i++) {
            masterMoveChance = Math.floor(Math.random() * 100) + 1;
            result = masterMoveChance >=1 && masterMoveChance <= 100;
            expect(result).toBe(true);
        }
    })  
})
