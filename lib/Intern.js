/**
 * Class Intern
 * descends from EMPLOYEE
 * @type {Employee}
 */
const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this._school = school;
    }

    get school() {
        return this._school;
    }

    set school(value) {
        this._school = value;
    }
    get role() {
        return "Intern";
    }
}
module.exports = Intern;