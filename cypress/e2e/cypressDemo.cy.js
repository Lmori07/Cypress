describe('example to-do app', () => {
    it('Visit the URL', () => {
        cy.visit('http://automationpractice.com/index.php')
      })
  
    it('Click on Contact Us', () => {
      cy.get('#contact-link').click()
    })
  
    it('Fill the form and send it', () => {
      //#id_contact select this
      cy.get('select').select('Customer service')
      //#email
      cy.get('#email').type('test@test.com')
      //#id_order
      cy.get('#id_order').type('7656351500')
      //#message
      cy.get('#message').type('Cypress Test Message.')
      //#submitMessage click on
      cy.get('#submitMessage').click()
    })
  
    it('Validate Information is sent', () => {
      //p Your message has been successfully sent to our team.
      cy.get('p').contains('Your message has been successfully sent to our team')
    })
  })
  