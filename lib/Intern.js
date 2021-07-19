class Intern extends Employee {
    constructor(school) {
        super();
        this._school = school;
    }

    get school() {
        return this._school;
    }

    set school(value) {
        this._school = value;
    }

    getRole() {
        return 'Intern';
    }

}