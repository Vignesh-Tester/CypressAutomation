// <reference types = "cypress" />
import Homepage from '../../support/PageObjects/Homepage'
import ProductPage from '../../support/PageObjects/ProductPage'

describe('Framework Practices', function () {

    before(function () {
        //run once before all tests in the block
        cy.fixture("testdata").then(function (data) {

            this.data = data
        })
    })
    it('First Test framework', function () {

        const homePage = new Homepage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url'))

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should("have.value", this.data.name)
        homePage.getEditBox().should("have.attr", "minlength", "2")
        homePage.getEntreprenuer().should("be.disabled")
        homePage.getShopTab().click()
        this.data.productName.forEach(element =>cy.selectProduct(element))
        productPage.getCheckout().click()
        var sum = 0
        productPage.getPriceamount().each(($e1, index, $list) => {
            const textAmount = $e1.text()
            var getAmount = textAmount.split(" ")
            getAmount = getAmount[1].trim()
            sum = Number(sum) + Number(getAmount)
        }).then(function(){
            cy.log(sum)
        })

        productPage.getTotalAmountValue().then(function(element)
        {
            const totalValue = element.text()
            var totalAmount = totalValue.split(" ")
            var desiredTotal = totalAmount[1].trim()
            expect(Number(desiredTotal)).to.equal(sum)
        })
        productPage.getPlaceCheckout().click()
        productPage.getCountry().type(this.data.desiredCountry)
        productPage.getDesiredCountry().click()
        productPage.getTermsAndPrivacy().click()
        productPage.getPurchase().click()
        //productPage.getSuccessAlert().should("have.value",'Success! Thank you! Your order will be delivered in next few weeks :-).')

        productPage.getSuccessAlert().then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })


    })

})
