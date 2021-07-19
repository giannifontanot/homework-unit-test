const inquirer = require('inquirer');

module.exports = {
    fillEmployeeData: () => {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name:',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter the name.';
                    }
                }
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter the employee ID number:',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter the employee ID number.';
                    }
                }
            },            {
                name: 'email',
                type: 'input',
                message: 'Enter a valid e-mail address:',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter an e-mail address.';
                    }
                }
            },
        ];
        return inquirer.prompt(questions);
    },
};