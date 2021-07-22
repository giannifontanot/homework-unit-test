const inquirer = require('inquirer');
const githubUsernameRegex = require('github-username-regex');

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
    checkValidateGitHubResponse: (github) => {
        console.log("github: >" + github+"<");
        return validateGitHubResponse(github);
    },
};

const validateGitHubResponse = name => {
    //validate null or undefined
    const message = "Please enter a valid GitHub. "
    if (name == null) {
        return message + "Your input cannot be null.";
    }
    //validate blank string
    if (!name.length) {
        return message + "Your input cannot be empty.";
    }
    //validate github username policy
    if (!githubUsernameRegex.test(name)) {
        return message + "Your input must be a valid GitHub username.";
    }
    //valid name
    return true;
};