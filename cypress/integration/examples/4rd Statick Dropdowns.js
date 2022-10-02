/// <reference types="Cypress" />

describe("My Fourth Test Case - Static Dropdown", () => {
  it("Static Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example").select("option2").should("have.value", "option2");
  });
});
