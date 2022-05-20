/// <reference types="Cypress" />

describe('My Fifth Test Suite', function () {

  it('My Fifth Test case', function () {

    //Webtables
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Get the desired column CSS
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

      //grab the text
      const text = $e1.text()
      //check contaims python
      if (text.includes("Python")) {

        //check for index of the selected one
        cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
          const priceText = price.text()
          //compare the actual vs expected
          expect(priceText).to.equal('25')
        })
      }

    })


  })


})
