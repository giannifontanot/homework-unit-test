const tools = require('./lib/tools');

// Inquirer questions
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

        // What else do you want to do?
        tools.clearPage();
        const {option} = await option_inquirer.getOption();

        switch (option) {
            case "add an engineer": {
                tools.clearPage();
                let {name, id, email} = await employee_inquirer.fillData('engineer');
                let {github} = await engineer_inquirer.fillData();
                let engineer = new Engineer(name, id, email, 'Engineer', github);
                gTeam.push(engineer);
                break;
            }
            case "add an intern": {
                tools.clearPage();
                let {name, id, email} = await employee_inquirer.fillData('intern');
                let {school} = await intern_inquirer.fillData();
                let intern = new Intern(name, id, email, 'Intern', school);
                gTeam.push(intern);
                break;
            }
            case "finish building my team": {
                tools.clearPage();
                bContinue = false;
                break;
            }
        }
    }
}

// RUN FORREST, RUN!!
run().then(r => {
// Read gTeam and generate html
    tools.buildHTML(gTeam);
});

