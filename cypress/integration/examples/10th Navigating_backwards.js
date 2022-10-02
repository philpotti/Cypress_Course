/// <reference types="Cypress" />

describe("My Tenth Test Case", () => {
  it("Navigating backwards and forwards", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.go("back");
    //Validating URL with 'eq' and 'include'
    cy.url().should("eq", "https://rahulshettyacademy.com/AutomationPractice/");
    cy.url().should("include", "/AutomationPractice/");
    cy.wait(3000);
    cy.go("forward");
    //Validating URL with 'eq' and 'include'
    cy.url().should("eq", "https://www.rahulshettyacademy.com/");
    cy.url().should("include", "rahulshettyacademy");
  });
});
