describe('Hello World project', () => {

    it('Open google page', () => {
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('christian')
    })

})
