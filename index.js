const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Team = require('./lib/Team');

const inquirer = require("inquirer");

const promptManagerInfo = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team Manager's name",
            validate: nameInput => {
                if (nameInput) {
                    
                    return true;
                }
                else {
                    console.log(`
                    Please enter the team manager's name`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team Manager's employee ID",
            validate: idNumber => {
                var reg = /^\d+$/;
                if (reg.test(idNumber)) {
                    return true;
                }
                else {
                    console.log(`
                    Please enter a valid ID number for the team manager`);
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team Manager's email address",
            validate: emailInput => {
                if (emailInput.includes("@")) {
                    return true;
                }
                else {
                    console.log(`\nPlease enter a valid email address for the team manager`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team Manager's office number",
            validate: numberInput => {
                var reg = /^\d+$/;
                if (reg.test(numberInput)) {
                    return true;
                }
                else {
                    console.log(`
                    Please enter a valid office number  for the team manager`);
                    return false;
                }
            }
        }

    ])
        
}

const promptEmployee = manager => {
    console.log (manager);
    //  if (!manager.engineers && !manager.interns) {
    //      manager.engineers = [];
    //      manager.interns = []
    //  }
    const { managerName, managerID, managerEmail, officeNumber } = manager;
    const teamManager = new Manager(managerName, managerID, managerEmail, officeNumber);
    const team = new Team (teamManager);
    console.log(`
=============================
Add a New Employee
=============================    
    `);
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'confirmEmployeeType',
            message: 'What type of employee would you like to add? (Check only one)',
            choices: ['Engineer', 'Intern'],
            validate: employeeChoice => {
                if (employeeChoice.length === 1) {
                    return true;
                }
                else {
                    console.log('Choose only ONE employee type');
                    return false;
                }

            }
        }
    ])
        .then(newEmployee => {
            console.log(newEmployee);
            if (newEmployee.confirmEmployeeType[0] === "Engineer") {// prompt for engineer information
                if (!team.engineersArr) {
                    team.engineersArr = [];
                }
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: "What is the Engineer's name",
                        validate: nameInput => {
                            if (nameInput) {

                                return true;
                            }
                            else {
                                console.log(`
                    Please enter the Engineer's name`);
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'engineerID',
                        message: "What is the Engineer's employee ID",
                        validate: idNumber => {
                            var reg = /^\d+$/;
                            if (reg.test(idNumber)) {
                                return true;
                            }
                            else {
                                console.log(`
                    Please enter a valid ID number for the Engineer`);
                                return false;
                            }
                        },
                    },
                    {
                        type: 'input',
                        name: 'engineerEmail',
                        message: "What is the Engineer's email address",
                        validate: emailInput => {
                            if (emailInput.includes("@")) {
                                return true;
                            }
                            else {
                                console.log(`\nPlease enter a valid email address for the Engineer`);
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is the Engineer's github username",
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            }
                            else {
                                console.log(`
                    Please enter a github username for the Engineer`);
                                return false;
                            }
                        }
                    }
                ])
                    .then(engineerInfo => {
                        const { engineerName, engineerID, engineerEmail, github } = engineerInfo;
                        const newEngineer = new Engineer(engineerName, engineerID, engineerEmail, github);
                        team.engineersArr.push(newEngineer);
                        console.log(team);
                    })
                console.log('I chose Engineer');
            }
            else if (newEmployee, confirmEmployeeType === "Intern") {// prompt for intern information
                console.log('I chose intern');
            }
        })
    
}
promptManagerInfo()
    .then(promptEmployee)
