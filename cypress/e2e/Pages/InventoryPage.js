class InventoryPage {
    
    //Creo los elementos que voy a usar de la pagina InventoryPage
    elements = {
        titleSpan: ()=> cy.get('.title')
    }
}

module.exports = new InventoryPage();