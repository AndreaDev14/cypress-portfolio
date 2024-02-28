
class Login {
    constructor(){
        this.usernameInput = () => cy.get('#user-name')
        this.passwordInput = () =>  cy.get('#password')
        this.loginButton = () => cy.get('#login-button')
        this.errorMessage = () =>  cy.get('[data-test="error"]')

    }

    validLogin(username,password){
        this.usernameInput().type(username)
        this.passwordInput().type(password)
        this.loginButton().click()
    }

    insertUsername(username) {
        this.usernameInput().type(username)
    }
    insertPassword(password) {
        this.passwordInput().type(password)
    }

    clickLoginButton(){
        this.loginButton().click()
    }
}

export const login = new Login();