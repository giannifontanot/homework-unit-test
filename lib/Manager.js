const Employee = require('./Employee');
class Manager extends Employee {

    constructor(officeNumber) {
        super();
        this._officeNumber = officeNumber;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    set officeNumber(value) {
        this._officeNumber = value;
    }

    get role() {
        return 'Manager';
    }

}

module.exports = Manager;