class Login {
  constructor() {
    this.loginLink = () => cy.get('#login2')
    this.usernameInput = () => cy.get('#loginusername')
    this.passwordInput = () => cy.get('#loginpassword')
    this.loginBtn = () => cy.get('button[onclick="logIn()"]')
    this.loginMessage = () => cy.get('a#nameofuser');
  }

  clickLoginLink() {
    this.loginLink().click();
  }

  insertUsername(username) {
    this.usernameInput().type( username, {force: true});
  }

  insertPassword(password) {
    this.passwordInput().type( password, {force: true});
  }


  clickLoginBtn() {
    this.loginBtn().click({force: true})
  }

  validLogin(username,password) {
    this.insertUsername(username)
    this.insertPassword(password)
    this.clickLoginBtn()
  }

}

export const login = new Login();
