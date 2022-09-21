const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Peter', 10, 'peterocallaghan23@gmail.com');

    expec(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.id).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Peter', 10, 'peterocallaghan23@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test('get employee id', () => {
    const employee = new Employee('Peter', 10, 'peterocallaghan23@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee id', () => {
    const employee = new Employee('Peter', 10, 'peterocallaghan23@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee name', () => {
    const employee = new Employee('Peter', 10, 'peterocallaghan23@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
})


