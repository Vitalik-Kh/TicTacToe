import AIActionObj from './AIAction';
const AIAction = new AIActionObj(0);
test('AIAction', function() {
    expect(AIAction.movePos).toBe(0);
})