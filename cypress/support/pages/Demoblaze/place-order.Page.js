class PlaceOrder {
  constructor() {
    this.placeOrderButton = () => cy.contains("button", "Place Order");
    this.shippingInformationPage = () => cy.get("#orderModal");
    this.inputName = () => cy.get("#name");
    this.inputCountry = () => cy.get("input#country");
    this.inputCity = () => cy.get("input#city");
    this.inputCredictCard = () => cy.get("input#card");
    this.inputMonth = () => cy.get("input#month");
    this.inputYear = () => cy.get("input#year");
    this.purchaseButton = () => cy.contains("button", "Purchase");
    this.closePurchaseButton = () => cy.contains("button", "Close");
    this.greenCheckMark = () => cy.get(".sa-success");
    this.sucessPurchaseText = () => cy.contains("h2", "Thank you");
    this.confirmationButton = () => cy.contains('button', 'OK')
  }

  clickPlaceOrderButton() {
    this.placeOrderButton().click();
  }
  insertOrderInformation(name, country, city, credictCard, month, year) {
    this.inputName().invoke("val", name);
    this.inputCountry().invoke("val",country);
    this.inputCity().invoke("val",city);
    this.inputCredictCard().invoke("val",credictCard);
    this.inputMonth().invoke("val",month);
    this.inputYear().invoke("val",year);
  }
  clickPurchaseButton() {
    this.purchaseButton().click();
  }

  VerifyConfirmationMessageIsDisplayed() {
    this.greenCheckMark().should("be.visible");
    this.sucessPurchaseText().should("be.visible");
  }
clickOkButton() {
    cy.wait(1000)
    this.confirmationButton().click();
}
  verifyHomePageIsShown() {
    cy.url().should("include", "index.html");
  }
}
export const placeOrder = new PlaceOrder();
