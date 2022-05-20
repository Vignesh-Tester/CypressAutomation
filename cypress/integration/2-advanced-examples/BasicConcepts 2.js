/// <reference types = "cypress" />

describe('Second Test Suite', function () {

  it('My Second Test Case', function () {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.wait(2000)
    cy.get(".products").as("productLocator")
    cy.get("@productLocator").find(".product").eq(0).contains("ADD TO CART").click()
    cy.get('.cart-icon > img').click()
    cy.contains("PROCEED TO CHECKOUT").click()
    cy.contains("Place Order").click()


  })

})
