const inquirer = require('inquirer');

module.exports = {
    fillData: () => {
        const questions = [
            {
                name: 'school',
                type: 'input',
                message: 'Enter the school name:',
                validate: validateSchoolResponse,
            },

        ];
        return inquirer.prompt(questions);
    },
};

const validateSchoolResponse = school => {
    //validate null or undefined
    const message = "Please enter a valid school."
    if (school == null) {
        return message + "Cannot be null.";
    }
    //validate blank string
    if (!school.length) {
        return message + "Cannot be empty.";
    }
    //validate not numbers
    let pattern = new RegExp(/[^0-9]/g);
    if (!pattern.test(school)) {
        return message + "No numbers in school accepted.";
    }
    //valid name
    return true;
};