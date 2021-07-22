const inquirer = require('inquirer');
const chalk = require("chalk");

module.exports = {
    fillData: (employee) => {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the ' + chalk.red(employee) + ':',
                validate: validateNameResponse,
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter the employee ID number:',
                validate: validateIdResponse,
            }, {
                name: 'email',
                type: 'input',
                message: 'Enter a valid e-mail address:',
                validate: validateEmailResponse,
            },
        ];
        return inquirer.prompt(questions);
    },
    checkValidateNameResponse: (name) => {
        console.log("name: >" + name+"<");
        return validateNameResponse(name);
    },
    checkValidateIdResponse: (Id) => {
        console.log("ID: >" + Id+"<");
        return validateIdResponse(Id);
    },
    checkValidateEmailResponse: (email) => {
        console.log("email: >" + email+"<");
        return validateIdResponse(email);
    },

};

const validateNameResponse = name => {
    //validate null or undefined
    const message = "Please enter a valid name. "
    if (name == null) {
        return message + "Cannot be null.";
    }
    //validate blank string
    if (!name.length) {
        return message + "Cannot be empty.";
    }
    //validate not numbers, special characters
    let pattern = new RegExp(/^[a-zA-Z]+$/g);
    if (!pattern.test(name)) {
        return message + "No numbers or special characters accepted.";
    }
    //valid name
    return true;
};

const validateIdResponse = id => {
    //validate null or undefined
    const message = "Please enter a valid ID. "
    if (id == null) {
        return message + " Cannot be null.";
    }
    //validate blank string
    if (!id.length) {
        return message + "Cannot be empty.";
    }
    //validate number
    if (isNaN(id)) {
        return message + "Only numbers, please.";
    }
    //valid ID
    return true;
};

const validateEmailResponse = email => {
    //validate null or undefined
    const message = "Please enter a valid email. "
    if (email == null) {
        return message + "Cannot be null.";
    }
    //validate blank string
    if (!email.length) {
        return message + "Cannot be empty.";
    }
    //validate shape and characters
    let pattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g);
    if (!pattern.test(email)) {
        return message + "No special characters, please. Only @ allowed.";
    }
    //valid email
    return true;
};