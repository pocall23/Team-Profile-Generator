const Employee = require('./employee');

const managerQuestions = [
    
    {
        type: "input",
        name: 'managerName',
        message: 'Please ener the Manager\'s name:',
    },
    {
        type: "input",
        name: 'managerId',
        message: 'Please ener the Manager\'s ID:',
    },
    {
        type: "input",
        name: 'managerEmail',
        message: 'Please ener the Manager\'s email:',
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