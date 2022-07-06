const Employye = require('./lib/empoyee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateTeam = require('./src/template');
const { init } = require('express/lib/application');


teamArray = [];

function initApp() {
    htmlBuilder();

    createTeam();
}

    function createTeam(){

        inquirer
        .prompt([{
            type: 'list',
            message: 'Please select the employer you would like to add to your team:',
            name:"addEmployee",
            choices:[
                'Engineer', 'Intern', 'Manager', 
                'None'
            ]
        }])
        .then(function(UserInput){
            switch(UserInput.addEmployee){
                case 'Engineer':
                    addEngineer();
                    break;
                
                case 'Intern':
                    addIntern();
                    break;

                case 'Engineer':
                    addManager();
                    break;

                
                default:
                    htmlBuilder();             
            }
        })
    }

    function addEngineer(){
        inquirer
        .prompt([

            {
                type: "input",
                name: 'engineerName',
                message: 'Please ener the Engineer\'s name:',
            },
            {
                type: "input",
                name: 'engineerId',
                message: 'Please ener the Engineer\'s ID:',
            },
            {
                type: "input",
                name: 'engineerEmail',
                message: 'Please ener the Engineer\'s email:',
            },
        ]).then(response =>{
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail);
            teamArray.push(engineer);
            
        })
    }
    function addIntern(){
        inquirer
        .prompt([

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
            },
        ]).then(response =>{
            const intern = new Intern(response.internName, response.internId, response.internEmail);
            teamArray.push(intern);
            
        })
    }
    function addManager(){
        inquirer
        .prompt([

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
        ]).then(response =>{
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail);
            teamArray.push(manager);
            
        });
    }
    function htmlBuilder(){
        console.log('Team created!')

        fs.writeFileSync(outputPath, generateTeam(teamArray),'UTF-8')
    }
    


initApp();