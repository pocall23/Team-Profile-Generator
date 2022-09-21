
const Employee = require('./employee');

const internQuestions =[

{
    type: "input",
    name: 'Name',
    message: 'Please ener the Intern\'s name:',
},
{
    type: "input",
    name: 'internId',
    message: 'Please ener the Intern\'s ID:',
},
{
    type: "input",
    name: 'internEmail',
    message: 'Please ener the Intern\'s email:',
}]

class Intern extends Employee{

    constructor (name,id, email,school){
        
        super(name,id, email);

        this.school = school;
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
   
};


module.exports =  { Intern, internQuestions };