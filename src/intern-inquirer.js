const inquirer = require('inquirer');

module.exports = {
    fillData: () => {
        const questions = [
            {
                name: 'school',
                type: 'input',
                message: 'Enter the school name',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter the school name';
                    }
                }
            },

        ];
        return inquirer.prompt(questions);
    },
};