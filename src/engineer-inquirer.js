const inquirer = require('inquirer');

module.exports = {
    fillData: () => {
        const questions = [
            {
                name: 'github',
                type: 'input',
                message: 'Enter the GitHub username:',
                validate: validateGitHubResponse,
            },

        ];
        return inquirer.prompt(questions);
    },
};
const validateGitHubResponse = name => {
    //validate null or undefined
    const message = "Please enter a valid GitHub."
    if (name == null) {
        return message + "Cannot be null.";
    }
    //validate blank string
    if (!name.length) {
        return message + "Cannot be empty.";
    }
    //validate only lowercase and numbers
    let pattern = new RegExp(/^[a-z0-9]+$/g);
    if (!pattern.test(name)) {
        return message + " Only numbers and lowercase letters.";
    }
    //valid name
    return true;
};