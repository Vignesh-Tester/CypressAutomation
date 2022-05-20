beforeEach(function(){
    
     //run once before all tests in the block
     cy.fixture("testdata").then(function (data) {

        this.data = data
    })
})