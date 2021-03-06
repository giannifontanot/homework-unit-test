/**
 *
 */
class Employee {
    constructor(name, id, email, role) {
        this._name = name;
        this._id = id;
        this._email = email;
        this._role = role;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get role() {
        return this._role;
    }
    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }

    set email(value) {
        this._email = value;
    }

    set role(value) {
        this._role = value;
    }
}
module.exports = Employee;