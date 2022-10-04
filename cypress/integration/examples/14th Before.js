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
    cy.get('input[name="name"]:nth-child(1)').should("have.value", this.data.name);
    cy.get('input[name="name"]:nth-child(2)').should("have.attr", "minlength", "2"); // validando el attribute de un objeto es = 2 (minlength="2")
    cy.get("#inlineRadio3").should("be.disabled");
    cy.contains("Shop").click();

    this.data.productName;
    // this.data.productName comes from fixtures.example.json
    // forEach function is to iterate through an array
    // this.data.productName contains Blackberry and Nokia Edge, that's why they get selected
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    // cy.selectProduct("Blackberry"); //selectProduct is a customized command that is in support.commands.js and productName is replaced by 'Blackberry'
    // cy.selectProduct("Nokia Edge"); //selectProduct is a customized command that is in support.commands.js and productName is replaced by 'Nokia Edge'
  });
});
