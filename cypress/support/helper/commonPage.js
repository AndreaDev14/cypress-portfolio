import { faker } from "@faker-js/faker";
export function verifyAlert(expectedMessage) {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(expectedMessage);
    });
  }

  
class TestSuites {
    constructor() {
      this.signUp = "Sign Up";
      this.login = "Login";
      this.catalogoYCompras = "Catálogo y Compras";
    }
  }

  class Data {
    constructor() {
      this.randomUsername= faker.internet.userName();
      this.randomPassword = faker.internet.password();
    }
    

  }
  export const testSuites = new TestSuites ();
  export const data = new Data();