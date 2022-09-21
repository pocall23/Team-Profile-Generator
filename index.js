// const { Employee } = require('./lib/employee');
const { Manager, managerQuestions }= require('./lib/manager');
const { Engineer, engineerQuestions} = require('./lib/engineer');
const { Intern, internQuestions  }=  require('./lib/intern');

const inquirer = require('inquirer');
const writeFile = require('./src/writeFile')
const generateTeam = require('./src/template');



teamArray = [];



const initApp = () => { managerQuestionsFunc() }

const managerQuestionsFunc = () => {
    inquirer.prompt(managerQuestions).then(( answers) => {
        answer = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArray.push(answers);
        return employeePrompt();
    })
};

const internQuestionsFunc = () => {
    inquirer.prompt(internQuestions).then(( answers) => {
        answer = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArray.push(answers);
        return employeePrompt();
    })
}
const engineerQuestionsFunc = () => {
    inquirer.prompt(engineerQuestions).then(( answers) => {
        answer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArray.push(answers);
        return employeePrompt();
    })
}


const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices : [
            {name:  'Enigineer', value: 'addEngineer'},
            {name:  'Intern', value: 'addIntern'},
            {name:  'done', value: 'done'}
        ]
    }]).then( answer => {
        if(answer.employeeType === 'addEngineer'){
            engineerQuestionsFunc();
        };
        if(answer.employeeType === 'addIntern'){
            internQuestionsFunc();
        };
        if(answer.employeeType === 'done'){
            let html = generateTeam(teamArray)

            console.log('..')

            writeFile(html);
        }

    })
}
    


initApp();