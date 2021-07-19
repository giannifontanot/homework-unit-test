const inquirer = require('inquirer');

module.exports = {
    getOption: () => {
        const questions = [
            {
                name: 'option',
                type: 'list',
                message: 'What do you want to do next?',
                choices: ['add an engineer', 'add an intern', 'finish building my team'],
            },
        ];
        return inquirer.prompt(questions);
    },
};