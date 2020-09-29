const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Team = require('./lib/Team');
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require('./utils/generate-site.js');

const inquirer = require("inquirer");

const promptManagerInfo = () => {
    const team = {};
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
        .then(managerInfo => {
            const { managerName, managerID, managerEmail, officeNumber } = managerInfo;
            //const teamManager = new Manager(managerName, managerID, managerEmail, officeNumber);
            const teamManager = new Manager();
            teamManager.setName(managerName);
            teamManager.setID(managerID);
            teamManager.setEmail(managerEmail);
            teamManager.setOfficeNumber(officeNumber);
            team.manager = {};
            console.log(teamManager);
            team.manager.name = teamManager.getName();
            team.manager.email = teamManager.getEmail();
            team.manager.ID = teamManager.getID();
            team.manager.officeNumber = teamManager.getOfficeNumber();
            console.log(team);
            return team;
    })
        
}

const promptEmployee = team => {
    console.log (team);
      if (!team.engineersArr && !team.internsArr) {
          team.engineersArr = [];
          team.internsArr = []
      }
    // const { managerName, managerID, managerEmail, officeNumber } = manager;
    // const teamManager = new Manager(managerName, managerID, managerEmail, officeNumber);
    // const team = new Team (teamManager);
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
                    },
                ])
                    .then(engineerInfo => {
                        const { engineerName, engineerID, engineerEmail, github } = engineerInfo;
                        const newEngineer = new Engineer();
                        newEngineer.setName(engineerName);
                        newEngineer.setID(engineerID);
                        newEngineer.setEmail(engineerEmail);
                        newEngineer.setGitHubUsername(github);
                        team.engineersArr.push(
                            {
                                name: newEngineer.getName(),
                                id: newEngineer.getID(),
                                email: newEngineer.getEmail(),
                                github: newEngineer.getGitHubUsername()
                            });
                            return team;
                    })
                console.log('I chose to add an Engineer');
            }
            else if (newEmployee.confirmEmployeeType[0] === "Intern") {// prompt for intern information
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: "What is the Intern's name",
                        validate: nameInput => {
                            if (nameInput) {

                                return true;
                            }
                            else {
                                console.log(`
                    Please enter the Intern's name`);
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'internID',
                        message: "What is the Intern's employee ID?",
                        validate: idNumber => {
                            var reg = /^\d+$/;
                            if (reg.test(idNumber)) {
                                return true;
                            }
                            else {
                                console.log(`
                    Please enter a valid ID number for the Intern`);
                                return false;
                            }
                        },
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: "What is the Intern's email address?",
                        validate: emailInput => {
                            if (emailInput.includes("@")) {
                                return true;
                            }
                            else {
                                console.log(`\nPlease enter a valid email address for the Intern`);
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "What school does the intern attend?",
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            }
                            else {
                                console.log(`
                    Please enter a github username for the Intern`);
                                return false;
                            }
                        }
                    }
                ])
                    .then(internInfo => {
                        const { internName, internID, internEmail, school} = internInfo;
                        // const newIntern = new Intern(internName, internID, internEmail, school);
                        const newIntern = new Intern();
                        newIntern.setName(internName);
                        newIntern.setID(internID);
                        newIntern.setEmail(internEmail);
                        newIntern.setSchool(school);
                        team.internsArr.push(
                            {
                                name: newIntern.getName(),
                                id: newIntern.getID(),
                                email: newIntern.getEmail(),
                                school: newIntern.getSchool()
                            });
                        return team;

                    })
                console.log('I chose intern');
            }
        })
        .then(() => {
            return inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee',
                    default: false,
                    
                }
            ])
        })
        .then(confirmAdd => {
            if (confirmAdd.confirmAddEmployee) {
                return promptEmployee(team);
            }
            else {
                return team;
            }
            
        })
10    
}
const newTeam = {
    manager:{
        name: 'Hameed',
        id: '1',
        email: 'hameed@',
        officeNumber: '21698459'
  },
    engineersArr: [
        {
            name: 'Fathiat',
            id: '2',
            email: 'ftsule@',
            gitHubUsername: 'fathiat1239'
        },
        {
            name: 'Abdul',
            id: '3',
            email: 'Abdul@',
            gitHubUsername: 'Abdul1239'
        }
    ],
    internsArr: [
         {
            name: 'Abdulzahir',
            id: '4',
            email: 'Abdulzahir@',
            school: 'Harvard'
        },
         {
            name: 'Nayla',
            id: '4',
            email: 'Nayla@',
            school: 'Harvard'
        }
    ]
}

promptManagerInfo()
    //.then(promptEmployee)
    .then(team => {
    //    console.table(team);
     //   console.table(team.engineersArr);
     //   console.table(team.internsArr);
        return generatePage(newTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });