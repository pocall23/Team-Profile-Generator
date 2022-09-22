const Intern = require('../lib/intern');


test('creates intern object', () => {
    const intern = new Intern('Peter', 23, 'peterocallaghan23@gmail.com', 'Monash');

    expect(intern.school.toEqual(expect.any(String)))
});

test('gets interns school', () => {
    const intern = new Intern('Peter', 23, 'peterocallaghan23@gmail.com', 'Monash');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employees role', () => {
    const intern = new Intern('Peter', 23, 'peterocallaghan23@gmail.com', 'Monash');

    expect(intern.getRole().toEqual("Intern"))
});