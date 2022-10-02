/// <reference types="Cypress" />

describe("My Seventh Test Case - Radio buttons validation", () => {
  it("Radio buttons validation", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("input[value='radio2']").check();
    cy.get("input[value='radio2']").should("be.checked");
  });
});
