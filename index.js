// Required libraries: INQUIRER and FILE SYSTEM
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// Inquirer questions
const fs = require('fs');
const employee_inquirer = require('./src/employee-inquirer');
const manager_inquirer = require('./src/manager-inquirer');
const option_inquirer = require('./src/option_inquirer');
const intern_inquirer = require('./src/intern-inquirer');
const engineer_inquirer = require('./src/engineer-inquirer');

// Classes
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

// Containers
const gTeam = [];

// RUN FORREST, RUN!!
run = async () => {

    tools.clearPage();

    // Enter manager's information
    let {name, id, email} = await employee_inquirer.fillData('manager');
    let {officeNumber} = await manager_inquirer.fillData();

    // Create a new object using the class Manager
    let manager = new Manager(name, id, email, 'Manager', officeNumber);

    // We add a manager to the team
    gTeam.push(manager);

    // Ask about the other members of the team
    let bContinue = true;
    while (bContinue) {
        let name = "";
        let id = "";
        let email = "";
        let github = "";
        // What else do you want to do?
        fClearPage();
        const {option} = await option_inquirer.getOption();

        switch (option) {
            case "add an engineer": {
                fClearPage();

                let {name, id, email} = await employee_inquirer.fillData();
                let {github} = await engineer_inquirer.fillData();
                const engineer = new Engineer(name, id, email, github);
                gTeam.push(engineer);
                break;
            }
            case "add an intern": {
                fClearPage();
                let {name, id, email} = await employee_inquirer.fillData();
                let {school} = await intern_inquirer.fillData();
                const intern = new Intern(name, id, email, school);
                gTeam.push(intern);
                break;
            }
            case "finish building my team": {
                fClearPage();
                bContinue = false;
                break;
            }
        }
    }

}

run().then(r => {
console.log(JSON.stringify(gTeam));

});

// console.log(JSON.stringify(optionMenu));
// // {"option":"add an engineer"}


function fClearPage() {

    clear();

    console.log(
        chalk.yellow(
            figlet.textSync('My Team', {
                horizontalLayout: 'full'
            })
        )
    );

}
