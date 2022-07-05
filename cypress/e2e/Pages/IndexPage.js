class IndexPage {
    //Para poder accesar a la pagina en cuestion.
    navigate(){
        cy.visit('http://automationpractice.com/index.php')
    }
    //Seteo las acciones que voy hacer en mi IndexPage con los elementos previamente declarados.
    typeOnSearch(item){
        cy.get('#search_query_top')
            .clear()
            .type(item);
        return this
    }
    clickSearch(){
        cy.get('.button-search').click();
    }
    Validate(){
        cy.contains('Dress');
    }
}

//Para exportarlo y poder usarlo en los test especificos mas adelante.
module.exports = new IndexPage();
