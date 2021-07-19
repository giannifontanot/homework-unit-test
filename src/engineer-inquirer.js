const inquirer = require('inquirer');

module.exports = {
    fillData: () => {
        const questions = [
            {
                name: 'githubusername',
                type: 'input',
                message: 'Enter the GitHub username',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter the GitHub username';
                    }
                }
            },

        ];
        return inquirer.prompt(questions);
    },
};