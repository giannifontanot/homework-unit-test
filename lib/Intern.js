const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this._school = school;
    }

    get school() {
        return this._school;
    }

    set school(value) {
        this._school = value;
    }

    get role() {
        return 'Intern';
    }

}
module.exports = Intern;