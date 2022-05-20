/// <reference types = "cypress" />

describe('Fourth Test Suite', function () {

  it('My Fourth Test Case', function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("#alertbtn").click()
    cy.get("input[id='confirmbtn']").click()

    //window alerts
    cy.on("window:alert",(str) =>{ 

      //Mocha 
      //compare two strings
      expect(str).to.equal("Hello , share this practice page and share your knowledge")
    })

    //confirm alerts
    cy.on("window:confirm",(str) =>{ 

      expect(str).to.equal("Hello , Are you sure you want to confirm?")
    })

    //child tab handling
    cy.get("#opentab").invoke("removeAttr","target").click()

    cy.url().should("include","rahulshettyacademy")

    cy.go("back")

    //Child Window/tab handling using .prop()


  })

})
