import { signup } from "../../support/pages/Demoblaze/signUp.Page";
import { testSuites } from "../../support/helper/commonPage";
import { removeLogs } from "../../support/helper/removeLogs";
removeLogs();

describe("DemoBlaze | " + `${testSuites.signUp}`, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("DemoBlaze | TC1: Validate sign up successfully ", () => {
    signup.clickSignUpLink();
    signup.validSignUp();
    signup.clickSignUpBtn();

    //Assertion
    signup.verifySignupSuccesfulMessageIsDisplayed("Sign up successful.");
  });

  it("DemoBlaze | TC2: Validate unable to register user with invalid data", () => {
    signup.clickSignUpLink();
    signup.validSignUp();

    //Assertion
    signup.verifySignupInvalidMessageIsDisplayed("User does not exist.");
  });
});
