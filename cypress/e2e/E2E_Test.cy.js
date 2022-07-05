import IndexPage from './Pages/IndexPage'

describe('Validating PoM on Cypress', () => {
    //Aqui preparo el test usando los elementos de mi homepages creados.
    it('Validate Search', () => {
        IndexPage.navigate();
        IndexPage.typeOnSearch('Dress');
        IndexPage.clickSearch();
        IndexPage.Validate();
        cy.screenshot();
    })
});