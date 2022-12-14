/// <reference types="Cypress" />

describe("My Fifth Test Case - Dynamic dropdown validation", () => {
  it("Dynamic dropdown validation", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
  });
});
