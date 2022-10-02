/// <reference types="Cypress" />

describe("My Second Test Suite", () => {
  it("My 2nd Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(3000);

    cy.get(".products").as("productoLocator"); // Acts as a variable definer

    cy.get("@productoLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find(".product-name").text();
        if (vegText.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get('img[alt="Cart"]').click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
