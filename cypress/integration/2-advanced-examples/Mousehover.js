/// <reference types="Cypress" />

describe('My Sixth Test Suite', function () {

  it('My Sixth Test case', function () {

    //MouseHover
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //get the CSS 

    //to check whether the elements are displayed on mouse hover
    //cy.get("div.mouse-hover-content").invoke('show')
    cy.contains("Top").click({ force: true })
    cy.url().should("includes", "top")

    //with the help of force: true will able to click the invisible elements
  })
})
