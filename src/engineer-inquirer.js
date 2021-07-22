/**
 * Inquirer questions and
 * validations for the
 * class ENGINEER
 */
const inquirer = require('inquirer');
const githubUsernameRegex = require('github-username-regex');

module.exports = {
    /**
     * Inquirer questions
     * @returns {*}
     */
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
    /**
     * Method used in Jest
     * @param github
     * @returns {string|boolean}
     */
    checkValidateGitHubResponse: (github) => {
        //console.log("github: >" + github+"<");
        return validateGitHubResponse(github);
    },
};
/**
 * Validates the input for the
 * GitHub username of the ENGINEER
 * @param id
 * @returns {string|boolean}
 */
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