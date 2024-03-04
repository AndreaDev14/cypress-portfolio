import { faker } from "@faker-js/faker";
import { countryAndCity, myClass} from "./getCountriesAndCities";


export function verifyAlert(expectedMessage) {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(expectedMessage);
    });
  }

  
class TestSuites {
    constructor() {
      this.signUp = "Sign Up";
      this.login = "Login";
      this.shoppingCart = "Shopping Cart";
    }
  }

  class Data {
    constructor() {
      this.country = countryAndCity.country
      this.city = countryAndCity.city
      this.randomUsername= faker.internet.userName();
      this.randomPassword = faker.internet.password();
      this.name = faker.person.fullName();
      this.credictCardNumber = faker.finance.creditCardNumber()
      this.month = faker.number.int(12)
      this.year = faker.number.int({ min: 2024, max: 2027 })
    }
  }

  export const testSuites = new TestSuites ();
  export const data = new Data();