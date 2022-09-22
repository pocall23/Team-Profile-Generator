const Employee = require('./employee');

const managerQuestions = [
    
    {
        type: "input",
        name: 'managerName',
        message: 'Please enter the Manager\'s name:',
    },
    {
        type: "input",
        name: 'managerId',
        message: 'Please enter the Manager\'s ID:',
    },
    {
        type: "input",
        name: 'managerEmail',
        message: 'Please enter the Manager\'s email:',
    },
    {
        type: "input",
        name: 'managerId',
        message: 'Please enter the Manager\'s office number:',
    },
]

class Manager extends Employee{

    constructor (name,id, email, officeNumber){
        
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }
    
};


module.exports = { Manager, managerQuestions } ;