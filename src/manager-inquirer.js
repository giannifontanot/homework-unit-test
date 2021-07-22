/**
 * Inquirer questions and
 * validations for the
 * class MANAGER
 */
const inquirer = require('inquirer');

module.exports = {

    /**
     * Inquirer questions
     * @returns {*}
     */
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
    /**
     * Method used in Jest
     * @param officeNumber
     * @returns {string|boolean}
     */
    checkValidateManagerResponse: (officeNumber) => {
	        console.log("officeNumber: >" + officeNumber + "<");
        return validateManagerResponse(officeNumber);
    },
};

/**
 * Validate Office Number
 * @param officeNumber
 * @returns {string|boolean}
 */
let validateManagerResponse = officeNumber => {
    //validate null or undefined
    const message = "Please enter a valid office number. "
    if (officeNumber == null) {
        return message + "Cannot be null.";
    }
    //validate blank string
    if (!officeNumber.length) {
        return message + "Cannot be empty.";
    }
    //validate not numbers
    let pattern = new RegExp(/^[0-9]+$/g);
    if (!pattern.test(officeNumber)) {
        return message + "Only numbers accepted.";
    }
    //valid name
    return true;
};