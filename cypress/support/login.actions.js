/* Comando o secuencia de codigo que se ejecuta cuando se hereda de los command in-line tambien usamos
el assertion should(be.visible) para asegurar que elemento esta listo para ser usado */
Cypress.Commands.add('Login', (username)=>{
    cy.fixture('elements').then((element)=>{
        cy.get(element.userNameInput).should('be.visible').type(username)
        cy.get(element.passwordInput).should('be.visible').type(element.password)
        cy.get(element.loginButton).should('be.visible').click()
    })
})