describe('index.spec.cy.js', () => {
  it('Should login as Standard User', () => {
    cy.fixture('elements').then((el) => {
      cy.Login(el.standard)
    })
  })
  it('Should login as Locked User', () => {
    cy.fixture('elements').then((el) => {
      cy.Login(el.locked)
    })
  })
  it('Should login as Problem User', () => {
    cy.fixture('elements').then((el) => {
      cy.Login(el.problem)
    })
  })
  it('Should login as Glitch User', () => {
    cy.fixture('elements').then((el) => {
      cy.Login(el.glitch)
    })
  })
})