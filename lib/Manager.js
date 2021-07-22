/**
 * Class Manager
 * Descends from EMPLOYEE
 * @type {Employee}
 */
const Employee = require('./Employee');
class Manager extends Employee {

    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this._officeNumber = officeNumber;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    set officeNumber(value) {
        this._officeNumber = value;
    }
    get role() {
        return "Manager";
    }

}

module.exports = Manager;