const manager_inquirer = require("../src/manager-inquirer");

describe("The user's input for office number", () => {
    it("should have a number", () => {
        const response = manager_inquirer.checkValidateManagerResponse("123456789");
        expect(response).toBeTruthy();
    });
    it("should not accept an empty number", () => {
        const response = manager_inquirer.checkValidateManagerResponse("");
        expect(response).toEqual("Please enter a valid office number. Cannot be empty.");
        //console.log(response);
    });
    it("should not accept null", () => {
        const response = manager_inquirer.checkValidateManagerResponse();
        expect(response).toEqual("Please enter a valid office number. Cannot be null.");
        //console.log(response);
    });
    it("should not accept letters", () => {
        const response = manager_inquirer.checkValidateManagerResponse("hello");
        expect(response).toEqual("Please enter a valid office number. Only numbers accepted.");
        //console.log(response);
    });
    it("should not accept special characters", () => {
        const response = manager_inquirer.checkValidateManagerResponse("#123");
        expect(response).toEqual("Please enter a valid office number. Only numbers accepted.");
        //console.log(response);
    });
    it("should not accept spaces", () => {
        const response = manager_inquirer.checkValidateManagerResponse(" 123 ");
        expect(response).toEqual("Please enter a valid office number. Only numbers accepted.");
        //console.log(response);
    });
});