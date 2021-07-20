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

const run = async () => {

    fClearPage();

    // Enter manager's information
    let employeeData = await employee_inquirer.fillData();
    let managerData = await manager_inquirer.fillData();

    let bContinue = true;
    while (bContinue) {

        let employeeData = "";
        let engineerData = "";
        let internData = "";

        // What else do you want to do?
        fClearPage();
        const {option} = await option_inquirer.getOption();
        switch (option) {
            case "add an engineer":
                fClearPage();
                employeeData = await employee_inquirer.fillData();
                engineerData = await engineer_inquirer.fillData();
                break;
            case "add an intern":
                fClearPage();
                employeeData = await employee_inquirer.fillData();
                internData = await intern_inquirer.fillData();
                break;
            case "finish building my team":
                fClearPage();
                bContinue = false;
                break;
        }
    }

}

run().then(r => {


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
