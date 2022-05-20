/// <reference types = "cypress" />

describe('Third Test Suite', function () {

  it('My Third Test Case', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //checkboxes
    cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
    cy.get("input[type='checkbox']").check(["option1", "option2"])

    //Static dropdowns

    cy.get("select").select("option2").should("have.value", 'option2')

    //Dynamic Dropdowns

    cy.get("#autocomplete").type("ind")

    cy.get('.ui-menu-item div').each(($e1, index, $list) => {

      if ($e1.text()=== "India") {
        cy.wrap($e1).click()
      }

    })
    cy.get("#autocomplete").should("have.value","India")

    // Handling visible and Invisible Elements
    cy.get("#displayed-text").should("be.visible")
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should("not.be.visible")
    cy.get("#show-textbox").click()
    cy.get("#displayed-text").should("be.visible")

    //radio Buttons
    cy.get("input[value='radio2']").check().should("be.checked")



  })

})
