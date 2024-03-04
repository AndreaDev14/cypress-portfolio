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

  insertUsername(username) {
    this.usernameInput().invoke('val', username);
  
  }

  insertPassword(password) {
    this.passwordInput().invoke('val', password);

  }

  validSignUp(username, password) {
    this.insertUsername(username);
    this.insertPassword(password);
    this.clickSignUpBtn();
  }

  clickSignUpBtn() {
    this.signUpBtn().click({force: true});
  }


}

export const signup = new Signup();
