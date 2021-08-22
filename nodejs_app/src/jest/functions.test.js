import functions from './functions';

test('pagsamahin ang 2 at 2 para magresult sa 4', () => {
    expect(functions.add(2, 2)).toEqual(4);
});

test('pagsamahin ang 2 at 2 at dapat ay hnd mag result sa 5', () => {
    expect(functions.add(2, 2)).not.toEqual(5);
});

test('dapat null ang ibato nito', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy is value that returns false like null, 0, undefined
test('value should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
    //expect(functions.checkValue(0)).toBeFalsy();
    //expect(functions.checkValue(null)).toBeFalsy();
});

test('dapat ang ireturn is si Jerard age 30', () => {
    expect(functions.getUser()).toEqual({name:'Jerard', age:30});
});

test('should be under 2000', () => {
    const a = 100;
    const b = 200;
    expect(a+b).toBeLessThanOrEqual(2000);
})

test('There is no L in Jerard', () => {
    expect('Jerard').not.toMatch(/L/i);
})

test('The team should not contain Reynan', () => {
    const team = ['Jerard', 'Krizia'];
    expect(team).not.toContain('Reynan');
})

