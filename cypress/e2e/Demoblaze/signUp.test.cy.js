import { signup } from "../../support/pages/Demoblaze/signUp.Page";
import { testSuites, data, verifyAlert } from "../../support/helper/commonPage";
import { removeLogs } from "../../support/helper/removeLogs";
removeLogs();

describe("DemoBlaze | " + `${testSuites.signUp}`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("contain", "demoblaze");
  });

  it("DemoBlaze | TC1: Validate sign up successfully ", () => {
    signup.clickSignUpLink();
    signup.validSignUp(data.randomUsername, data.randomPassword);

    verifyAlert("Sign up successful.")
  });

  it("DemoBlaze | TC2: Validate unable to register user with invalid data", () => {
    signup.clickSignUpLink();
    signup.validSignUp(data.randomUsername, data.randomPassword);

    verifyAlert("User does not exist.")
  
  });
});
