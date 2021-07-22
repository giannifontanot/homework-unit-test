/**
 * Class Engineer,
 * descends from Employee
 * @type {Employee}
 */
const Employee = require('./Employee');
class Engineer extends Employee{

    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this._github = github;

    }

    get github() {
        return this._github;
    }

    set github(value) {
        this._github = value;
    }

    get role() {
	    return "Engineer";
    }
}
module.exports = Engineer;