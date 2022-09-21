const Engineer =require('../lib/engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Peter', 10, 'peterocallaghan23@gmail.com', 'pocall23');


    expect(engineer.github).toEqual(expect.any(String));

});


test('get engineer github username', () => {
    const engineer = new Engineer('Peter', 10, 'peterocallaghan23@gmail.com', 'pocall23');


    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get engineer github username', () => {
    const engineer = new Engineer('Peter', 10, 'peterocallaghan23@gmail.com', 'pocall23');


    expect(engineer.getRole()).toEqual("Engineer");
})