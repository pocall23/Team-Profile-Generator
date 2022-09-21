const Employee = require("./employee")

const engineerQuestions = [
   
    {
        type: "input",
        name: 'engineerName',
        message: 'Please enter the Engineer\'s name:',
    },
    {
        type: "input",
        name: 'engineerId',
        message: 'Please enter the Engineer\'s ID:',
    },
    {
        type: "input",
        name: 'engineerEmail',
        message: 'Please enter the Engineer\'s email:',
    },
    {
        type: "input",
        name: 'engineerEmail',
        message: 'Please enter the Engineer\'s github:',
    }
]
class Engineer extends Employee{

    constructor (name,id, email, github){
       

        super(name, id, email);

        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
};


module.exports = { Engineer, engineerQuestions };