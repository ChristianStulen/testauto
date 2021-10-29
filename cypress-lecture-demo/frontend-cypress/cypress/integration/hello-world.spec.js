/// <reference types="cypress" />

//Test suite
describe('Test suite - example', function(){

    it('Test case 1', function(){
        cy.visit('http://127.0.0.1:5500/cypress-lecture-demo/acme_website/acme/index.html')
        cy.contains('CSS3 Styling')
        cy.get('body > header > div > nav > ul > li:nth-child(2) > a').click()
        cy.contains('About Us')
        cy.get(':nth-child(3) > a').click()
        cy.contains('Services')
        cy.get('form > input').type('test@test.se')
        cy.get('.container > form > .button_1').click()

    })
})



// visit
// get
// type
// click
// contains