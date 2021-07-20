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

    get Role() {
        return 'Intern';
    }

}