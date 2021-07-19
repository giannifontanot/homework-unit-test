// Required libraries: INQUIRER and FILE SYSTEM
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const inquirer_recursive = require('inquirer-recursive');
const fs = require('fs');
const employee_inquirer = require('./src/employee-inquirer');
const manager_inquirer = require('./src/manager-inquirer');
const option_inquirer = require('./src/option_inquirer');
// const employee_inquirer = require('./src/intern-inquirer');
// const employee_inquirer = require('./src/engineer-inquirer');

clear();

console.log(
    chalk.yellow(
        figlet.textSync('My Team', {
            horizontalLayout: 'full'
        })
    )
);

const run = async () => {
    // Enter manager's information
    let employeeData = await employee_inquirer.fillData();
    let managerData = await manager_inquirer.fillData();

    let bContinue = true;
    while (bContinue) {

        let engineerData = "";
        let internData = "";

        // What else do you want to do?
        const {option} = await option_inquirer.getOption();
        switch (option) {
            case "add an engineer":
                employeeData = await employee_inquirer.fillData();
                managerData = await manager_inquirer.fillData();
                break;
            case "add an intern":
                employeeData = await employee_inquirer.fillData();
                const managerData = await manager_inquirer.fillData();
                break;
            case "finish building my team":
                bContinue = false;
                break;

        }

    }

}
run().then(r => {
    console.log("r: " + r);

});
// console.log(JSON.stringify(optionMenu));
// // {"option":"add an engineer"}
