describe('Cypress Intercept', () => {

    it('My first Intercept testt', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        //Both Request & Response are in JSON format & the intercept must be firstt before the action that we are doing with the endpoint
        //this is because when click action is been procssed cypress will be on the lookout on the network data for get method on url specified in the intercept
        //and the will be stubbed the response with the statuscode and body that we specified on the response object
        cy.intercept({
            //For the request we are expecifing what type of method is and from witch url is going to be
            method: 'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            //For the response we are cannot modify body structure because we are not going to be able to successfully sutbing the response
            statusCode: 200,
            body: [
                {
                    "book_name": "null",
                    "isbn": "SPY40",
                    "aisle": "2529857"
                }
            ]
        }).as('bookretrevail')

        cy.get('button[class="btn btn-primary"]').click()

        cy.wait('@bookretrevail')

    })
})