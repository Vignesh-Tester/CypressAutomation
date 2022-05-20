/// <reference types = "cypress" />
import Homepage from '../../../../support/PageObjects/Homepage'
import ProductPage from '../../../../support/PageObjects/ProductPage'
import {Given,When,And, Then} from "cypress-cucumber-preprocessor/steps" ;
const homePage = new Homepage()
const productPage = new ProductPage()
let name
Given('I open E-commerce Page',function()
{
    cy.visit(Cypress.env('url'))
})

When('I add items to cart',function() {
    homePage.getShopTab().click()
        this.data.productName.forEach(element =>cy.selectProduct(element))
        productPage.getCheckout().click()
})


And('Validate the total price',function(){
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
})

Then('select the country and submit verify Success message',function(){
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


When ('I will fill the form details', function(datatable){
    name = datatable.rawtable[1][0]
    homePage.getEditBox().type(datatable.rawtable[1][0])
    homePage.getGender().select(datatable.rawtable[1][1])
})

Then ('Validate the forms behaviour', function(){
    homePage.getTwoWayDataBinding().should("have.value", name)
    homePage.getEditBox().should("have.attr", "minlength", "2")
    homePage.getEntreprenuer().should("be.disabled")
})

And ('Select the Shop Page', ()=>{
    homePage.getShopTab().click()
})