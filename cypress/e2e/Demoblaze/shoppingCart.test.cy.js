import { testSuites, data, verifyAlert } from "../../support/helper/commonPage";
import { signup } from "../../support/pages/Demoblaze/signUp.Page";
import { login } from "../../support/pages/Demoblaze/login.Page";
import { shoppingCart } from "../../support/pages/Demoblaze/shoppingCart.Page";
import { placeOrder } from "../../support/pages/Demoblaze/place-order.Page";
import { removeLogs } from "../../support/helper/removeLogs";

removeLogs();
describe("DemoBlaze | " + `${testSuites.shoppingCart}`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("contain", "demoblaze");
    signup.validSignUp(data.randomUsername, data.randomPassword);
    login.validLogin(data.randomUsername, data.randomPassword);
  });

  it("DemoBlaze | TC1: Validate showing the list of items when the user clicks on a category", () => {
    shoppingCart.clickRandomCategory();
    shoppingCart.verifyitemsList();
  });

  it("DemoBlaze | TC2: Validate add product to the shopping cart", () => {
    shoppingCart.clickRandomCategory();
    shoppingCart.clickRandomItem();

    shoppingCart.verifyProductDetailPageisDisplayed();
    shoppingCart.clickAddToCartButton();
    verifyAlert("Product added.");

    shoppingCart.clickCartLink();
    shoppingCart.verifyProductAdded();
  });

  it("DemoBlaze | TC3: Validate making a purchase", () => {
    shoppingCart.clickRandomCategory();
    shoppingCart.clickRandomItem();

    shoppingCart.verifyProductDetailPageisDisplayed();
    shoppingCart.clickAddToCartButton();
    verifyAlert("Product added.");

    shoppingCart.clickCartLink();
    shoppingCart.verifyShoppingCartPageIsDisplayed();
    shoppingCart.verifyProductAdded();

    placeOrder.clickPlaceOrderButton();

    const { name, country, city, credictCardNumber, month, year } = data;
    placeOrder.insertOrderInformation(
      name,
      country,
      city,
      credictCardNumber,
      month,
      year
    );
    placeOrder.clickPurchaseButton();
    placeOrder.VerifyConfirmationMessageIsDisplayed();
    placeOrder.clickOkButton()
    placeOrder.verifyHomePageIsShown();
  });
});
