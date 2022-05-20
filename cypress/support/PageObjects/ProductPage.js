class ProductPage {

    getCheckout(){
        return cy.get(".nav-link.btn.btn-primary")
    }

    getPriceamount(){
        return cy.get("tr td:nth-child(4) strong")
    }

    getTotalAmountValue(){
        return cy.get("h3 strong")
    }

    getPlaceCheckout(){
        return cy.get(".btn.btn-success")
    }
   
    getCountry(){
        return cy.get("#country")
    }

    getDesiredCountry(){
        return cy.get(".suggestions > ul > li > a")
    }

    getTermsAndPrivacy(){
        return cy.get("label[for='checkbox2']")
    }

    getPurchase(){
        return cy.contains("Purchase")
    }

    getSuccessAlert(){
        return cy.get(".alert.alert-success.alert-dismissible")
    }
}

export default ProductPage;