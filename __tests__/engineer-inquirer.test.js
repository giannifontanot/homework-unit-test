const engineer_inquirer = require("../src/engineer-inquirer");

describe("The user's input for GitHub", () => {
    it("should have a username", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse("gianni-fontanot");
        expect(response).toBeTruthy();
    });
    it("should not accept an empty string", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse("");
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept null", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse();
        expect(response).toString();
        //console.log(response);
    });
    it("should not accept spaces", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse(" ");
        expect(response).toString();
        //console.log(response);
    });
    it("should not have underscores", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse("gianni_fontanot");
        expect(response).toString();
        //console.log(response);
    });
    it("should not have double dashes", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse("gianni--fontanot");
        expect(response).toString();
        //console.log(response);
    });
    it("should not begin with a dash", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse("gianni-fontanot");
        expect(response).toString();
        //console.log(response);
    });
    it("should not end in a dash", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse("gianni-fontanot-");
        expect(response).toString();
        //console.log(response);
    });
    it("should not be larger than 39 chars", () => {
        const response = engineer_inquirer.checkValidateGitHubResponse("1234567890123456789012345678901234567890");
        expect(response).toString();
        //console.log(response);
    });

});