class Engineer extends Employee{

    constructor(github) {
        super();
        this._github = github;

    }

    get github() {
        return this._github;
    }

    set github(value) {
        this._github = value;
    }

    getRole(){
        return 'Engineer';
    }

}