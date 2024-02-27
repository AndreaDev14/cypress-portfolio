
import { verifyAlert, data } from "../../helper/commonPage";

class Signup {
  constructor() {
    this.signupLink = () => cy.get('a[data-target="#signInModal"]');
    this.usernameInput = () => cy.get("input#sign-username");
    this.passwordInput = () => cy.get("input#sign-password");
    this.signUpBtn = () => cy.contains("button", "Sign up");

   
  }

  clickSignUpLink() {
    this.signupLink().click();
  }

  insertUsername() {
    this.usernameInput().invoke('val', data.randomUsername);
  
  }

  insertPassword() {
    this.passwordInput().invoke('val', data.randomPassword);

  }

  validSignUp() {
    this.insertUsername();
    this.insertPassword();
  }

  clickSignUpBtn() {
    this.signUpBtn().click();
  }

  verifySignupSuccesfulMessageIsDisplayed(message) {
    verifyAlert(message);
  }
  verifySignupInvalidMessageIsDisplayed(message) {
    verifyAlert(message);
  }
}

export const signup = new Signup();
