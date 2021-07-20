// Required libraries: INQUIRER and FILE SYSTEM
const inquirer = require('inquirer');
const inquirer_recursive = require('inquirer-recursive');
const fs = require('fs');

// Employee array
const gEmployeeArray = [];
let html = "";

// Begin prompt - Inquirer
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([{
    type: 'recursive',
    message: 'Add a new employee?',
    name: 'employees',
    prompts: [
        {
            // Name of the employee
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            // position
            name: "position",
            type: "input",
            message: "What is your position?",
        },
        {
            // Id of the employee
            name: "id",
            type: "input",
            message: "What is your id?",
        },
        {
            // email
            name: "email",
            type: "input",
            message: "what is your email address?",
        },
        {
            // Picture used
            name: "githubaccount",
            type: "input",
            message: "What is your Github account?",
        },
    ]
}]).then(data => {
    data.employees.forEach(employee => {

        html += `<ul>
                    <li>${employee.position}</li>
                    <li>${employee.id}</li>
                    <li>${employee.name}</li>
                    <li>${employee.email}</li>
                    <li>${employee.githubaccount}</li>
                </ul>`;
    });
    writeHTMLFile(html);

});



// Write Callback Function
function callbackWriteFile(err) {
    err ? console.log(err) : console.log('success');
}

function callbackEmployeeArray(item, index, array) {

}















