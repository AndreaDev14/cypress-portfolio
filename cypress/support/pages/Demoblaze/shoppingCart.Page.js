class ShoppingCart {
  constructor() {
    this.categories = ["Phones", "Laptops", "Monitors"];
    this.items = () => cy.get("#tbodyid .card .card-title a");
    this.AddtoCartButton = () => cy.contains("a", "Add to cart");
    this.cartLink = () => cy.contains("a", "Cart");
    this.itemTitleText = () => cy.get('div[id="tbodyid"] h2').invoke("text");
    this.itemText = "";
    this.tableItemTitle = () => cy.get(" tbody > tr > td:nth-child(2)");
  }

  clickRandomCategory() {
    cy.wait(1000);
    const randomIndex = Math.floor(Math.random() * this.categories.length);
    cy.contains("a", this.categories[randomIndex]).click();
  }

  clickRandomItem() {
    this.items().then((item) => {
      const randomItem = Math.floor(Math.random() * item.length);
      cy.wrap(item[randomItem]).click();
    });
  }

  verifyitemsList() {
    this.items().then((i) => {
      cy.wrap(i).should("be.visible");
    });
  }

  verifyProductDetailPageisDisplayed() {
    cy.url().should("contain", "/prod.html");
  }

  clickAddToCartButton() {
    this.AddtoCartButton().click();
    this.itemTitleText().then((text) => {
      this.itemText = text;
    });
  }

  clickCartLink() {
    this.cartLink().click();
  }

  verifyProductAdded() {
    this.tableItemTitle().then((title) => {
      const t = title.text();
      expect(t).to.contains(this.itemText);
    });
  }
  verifyShoppingCartPageIsDisplayed() {
    cy.url().should("contain", "/cart.html");
  }

 
}

export const shoppingCart = new ShoppingCart();
