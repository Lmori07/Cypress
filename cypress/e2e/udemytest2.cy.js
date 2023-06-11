import Homepage from "../e2e/pageObjects/HomePage"
import ProductPage from "../e2e/pageObjects/ProductPage"

describe('My Second suite', () => {
    
    let userdata;
    beforeEach(function() {
        //runs once before all test in the block or suite.

        cy.visit(Cypress.env('url') +'/angularpractice/')

        cy.fixture("example").then((data)=> {
          userdata = data;
        })
    })
    it.only('passes', () => {
      //This will impact this only test case.
      Cypress.config('defaultCommandTimeout', 8000)

      const homePage = new Homepage()
      const productPage = new ProductPage()
      
      homePage.getNameTextBox(userdata.name2)
      homePage.getGenderDropdown(userdata.gender)
      homePage.getDataBindingTextBox(userdata.name2)
      homePage.getNameTextBoxMinChar()
      //Be aware i was looking for the text and no the element itself that is disabled.
      homePage.getEntrepenuerRadioButton()

      homePage.getShopLink()

      //This is been held be the custom command create to select multiple products.
      userdata.productName.forEach(function (element) {
       cy.selectProduct(element)
      });

      productPage.getSelectedProduct()
      productPage.getTotalcheck()
      productPage.getCheckoutButton()
    })

})