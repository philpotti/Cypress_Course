/// <reference types="Cypress" />

describe("My Third Test Case", () => {
  it("First Checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // .check() clicks on a checkbox
    // .should("be.checked") verifies if it is checked
    // .and('have.value','option 1') verifies if the property value is eq to Option 1
    cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1");
    // .should("not.be.checked") verifies if it is checked
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    // first select the common value for all checkboxes, then select the checkboxes you want to check
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });
});
