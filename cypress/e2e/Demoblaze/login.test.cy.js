import { testSuites, data } from "../../support/helper/commonPage"
import { login} from "../../support/pages/Demoblaze/login.Page";
import { signup } from "../../support/pages/Demoblaze/signUp.Page";
import { removeLogs } from "../../support/helper/removeLogs";
removeLogs()



describe('DemoBlaze | ' + `${testSuites.login}`, () => {
    beforeEach(() => {
      cy.visit("/");
      signup.validSignUp()
      signup.signUpBtn().click({force:true})
    });
  
  it('DemoBlaze | TC1: Validate login successfully', () => {
    login.clickLoginLink()
    login.insertUsername(data.randomUsername)
    login.insertPassword(data.randomPassword)
    login.clickLoginBtn()

    login.loginMessage().should("have.text", `Welcome ${data.randomUsername}`);
  });

  it('DemoBlaze | TC2: Validate unable to login  with invalid data', () => {
    login.clickLoginLink()
    login.insertUsername('DarthVader')
    login.insertPassword('Iamyourfather')
    login.clickLoginBtn()
    //Assertion
    login.verifyLoginMessageIsDisplayed("User does not exist.")


      
  });
 
  });
  

