const inquirer = require('inquirer');

module.exports = {
    fillData: () => {
        const questions = [
            {
                name: 'officeNumber',
                type: 'input',
                message: 'Enter the office number:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter the office number.';
                    }
                }
            },

        ];
        return inquirer.prompt(questions);
    },
};