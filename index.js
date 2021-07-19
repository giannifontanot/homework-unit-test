// Required libraries: INQUIRER and FILE SYSTEM
const inquirer = require('inquirer');
const inquirer_recursive = require('inquirer-recursive');
const fs = require('fs');

// Employee array
const gEmployeeArray = [];
let html = "";

// Begin prompt - Inquirer
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([
    {
        // Name of the employee
        name: "manager_name",
        type: "input",
        message: "What is the manager's name?",
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
        name: "office_number",
        type: "input",
        message: "What is your Office number?",
    },
]).then(data => {
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

// We write the results
function writeHTMLFile(pText) {
    // Name of the file is always ./myTeam.html
    const html = `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t
                  <title>Employee Data</title>\n</head>\n
                  <body>\n <h1>My Team</h1>\n
                  ${pText}</body>\n</html>\n`;
    fs.writeFile("./dist/myTeam.html", html, callbackWriteFile);
}

// Write Callback Function
function callbackWriteFile(err) {
    err ? console.log(err) : console.log('success');
}

function callbackEmployeeArray(item, index, array) {

    console.log("item.name: " + item.name);
    console.log("item.email: " + item.email);
    console.log("item.githubaccount: " + item.githubaccount);
}















