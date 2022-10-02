/// <reference types="Cypress" />

describe("My First Test Suite", () => {
  it("My 1st Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(3000);

    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);

    cy.get(".products").as("productoLocator"); // Acts as a variable definer
    cy.get("@productoLocator").find(".product").should("have.length", 4);
    cy.get("@productoLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("sf");
      });

    cy.get("@productoLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find(".product-name").text();
        if (vegText.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    //grabbing the page LOGO
    cy.get(".brand.greenLogo").should("have.text", "GREENKART");
    cy.get(".brand.greenLogo").then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});
