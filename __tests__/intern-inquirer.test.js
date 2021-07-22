const intern_inquirer = require("../src/intern-inquirer");

describe("The user's input for school", () => {
    it("should have a name", () => {
        const response = intern_inquirer.checkValidateSchoolResponse("Caltech");
        expect(response).toBeTruthy();
    });
    it("should not accept an empty string", () => {
        const response = intern_inquirer.checkValidateSchoolResponse("");
        expect(response).toEqual("Please enter a valid school. Cannot be empty.");
        //console.log(response);
    });
    it("should not accept null", () => {
        const response = intern_inquirer.checkValidateSchoolResponse();
        expect(response).toEqual("Please enter a valid school. Cannot be null.");
        //console.log(response);
    });
    it("should not accept blank spaces at the beginning", () => {
        const response = intern_inquirer.checkValidateSchoolResponse(" Caltech");
        expect(response).toEqual("Please enter a valid school. No blank spaces at the beginning or end.");
        //console.log(response);
    });
    it("should not accept blank spaces at the end", () => {
        const response = intern_inquirer.checkValidateSchoolResponse("Caltech ");
        expect(response).toEqual("Please enter a valid school. No blank spaces at the beginning or end.");
        //console.log(response);
    });
});