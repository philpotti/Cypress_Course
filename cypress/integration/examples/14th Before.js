/// <reference types="Cypress" />

describe("Before suite scenario", () => {
  before(function () {
    // Runs once before all tests in the block
    // cy.fixture('example') brings the variables inside the fixtures/example.json foldler to use this.data.variable
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Testing Before hook", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name); //form div input[name="name"]
    cy.get("select[class='form-control']").select(this.data.gender);
  });
});
