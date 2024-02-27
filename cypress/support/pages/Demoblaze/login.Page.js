import { verifyAlert} from "../../helper/commonPage";


class Login {
  constructor() {
    this.loginLink = () => cy.get('#login2')
    this.usernameInput = () => cy.get('#loginusername')
    this.passwordInput = () => cy.get('#loginpassword')
    this.loginBtn = () => cy.contains('button', 'Log in');

    this.loginMessage = () => cy.get('a#nameofuser');
  }

  clickLoginLink() {
    this.loginLink().click();
  }

  insertUsername(username) {
    this.usernameInput().invoke("val", username);
  }

  insertPassword(password) {
    this.passwordInput().invoke("val", password);
  }


  clickLoginBtn() {
    this.loginBtn().click()
  }

 
  verifyLoginMessageIsDisplayed(message) {
    verifyAlert(message)
  }
}

export const login = new Login();
