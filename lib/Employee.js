class Employee {
    constructor(name, id, email) {
        this._name = name;
        this._id = id;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }

    set id(value) {
        this._id = value;
    }

    set email(value) {
        this._email = value;
    }

}