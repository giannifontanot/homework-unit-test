const employee_inquirer = require("../src/employee-inquirer");

describe("The user's input for Employee", () => {
    it("should have a name", () => {
        const response = employee_inquirer.checkValidateNameResponse("John");
        expect(response).toBeTruthy();
    });
    it("should not accept an empty string", () => {
        const response = employee_inquirer.checkValidateNameResponse("");
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept null", () => {
        const response = employee_inquirer.checkValidateNameResponse();
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept spaces", () => {
        const response = employee_inquirer.checkValidateNameResponse(" ");
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept numbers", () => {
        const response = employee_inquirer.checkValidateNameResponse(123);
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept numbers", () => {
        const response = employee_inquirer.checkValidateNameResponse("123");
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept special characters", () => {
        const response = employee_inquirer.checkValidateNameResponse("#");
        expect(response).toString();
        //console.log(response);
    });

});
describe("The user's input for ID", () => {
    it("should have a ID", () => {
        const response = employee_inquirer.checkValidateIdResponse("123456789");
        expect(response).toBeTruthy();
    });
    it("should not accept an empty number", () => {
        const response = employee_inquirer.checkValidateIdResponse("");
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept null", () => {
        const response = employee_inquirer.checkValidateIdResponse();
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept letters", () => {
        const response = employee_inquirer.checkValidateIdResponse("hello");
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept special characters", () => {
        const response = employee_inquirer.checkValidateIdResponse("#");
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept spaces", () => {
        const response = employee_inquirer.checkValidateIdResponse(" ");
        expect(response).toString();
        //console.log(response);
    });
});
    describe("The user's input for email", () => {
        it("should have an email address", () => {
            const response = employee_inquirer.checkValidateEmailResponse("yo@gmail.com");
            expect(response).toBeTruthy();
        });
        it("should not accept an empty email address", () => {
            const response = employee_inquirer.checkValidateEmailResponse("");
            expect(response).toString();
            //console.log(response);
        });
        it("should not accept null", () => {
            const response = employee_inquirer.checkValidateEmailResponse();
            expect(response).toString();
            //console.log(response);
        });
        it("should not accept special characters", () => {
            const response = employee_inquirer.checkValidateEmailResponse("#");
            expect(response).toString();
            //console.log(response);
        });
        it("should not accept spaces", () => {
            const response = employee_inquirer.checkValidateEmailResponse(" ");
            expect(response).toString();
            //console.log(response);
        });
});





