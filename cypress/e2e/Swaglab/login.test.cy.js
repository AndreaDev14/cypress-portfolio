import { removeLogs } from "../../support/helper/removeLogs";
import { login } from "../../support/pages/Swaglab/login.Page";
removeLogs();
import data from "../../fixtures/Swaglabs/login.json";

describe("SwagLabs | Account | Iniciar sesión y BR de Accesos", () => {
  beforeEach("Usuario debe estar en la página de Login", () => {
    cy.visit("https://www.saucedemo.com");
    cy.url().should('contain', 'demo');
  });

  it('GX3-756 | TC1: Validate successful login', () => {
    login.validLogin(data.validUserName, data.validPassword);
    cy.url().should('contain', 'demo');
  });

  // Test Cases login
  data.testCases.forEach((testCase, i) => {
    it(`GX3-756 | TC${i + 2}: ${testCase.testTitle}`, () => {

      testCase.username !== null && testCase.username !== undefined ? login.insertUsername(testCase.username) : null;

      //Check if testCase.password is not null or undefined, and if so, execute the method to insert the password.
      testCase.password !== null && testCase.password !== undefined ? login.insertPassword(testCase.password) : null;
      login.clickLoginButton();

      login.errorMessage().should('have.text', testCase.errorMessage);
    });
  });
  //     //Test Cases Endpoints
  data.endpoints.forEach((endpoint, i) => {
    it(`GX3-756 | TC${i + 8}: ${endpoint.endpointTitle}`, () => {
      cy.visit(endpoint.url, { failOnStatusCode: false });
      login.errorMessage().should('have.text', endpoint.endpointMessage);
    });
  });
});
