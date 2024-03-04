import { testSuites, data, verifyAlert } from "../../support/helper/commonPage";
import { login } from "../../support/pages/Demoblaze/login.Page";
import { signup } from "../../support/pages/Demoblaze/signUp.Page";
import { removeLogs } from "../../support/helper/removeLogs";
removeLogs();

describe("DemoBlaze | " + `${testSuites.login}`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("contain", "demoblaze");
    signup.validSignUp(data.randomUsername, data.randomPassword);
  });

  it("DemoBlaze | TC1: Validate login successfully", () => {
    login.clickLoginLink();
    login.validLogin(data.randomUsername, data.randomPassword);

    login.loginMessage().should("have.text", `Welcome ${data.randomUsername}`);

  });

  it("DemoBlaze | TC2: Validate unable to login  with invalid data", () => {
    login.clickLoginLink();
    login.validLogin("DarthVader", "Iamyourfather");

    verifyAlert("User does not exist.");
  });
});
