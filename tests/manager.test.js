const Manager = require('../lib/manager');


test('creates manager object', () => {
    const manager = new Manager('Peter', 23, 'peterocallaghan23@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employee role', () => {
    const manager = new Manager('Peter', 23, 'peterocallaghan23@gmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
});