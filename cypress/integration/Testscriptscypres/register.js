///<reference types = "cypress"/>
import Homepage from '../PageObject/Homepage'
import login from '../PageObject/loginpage'


describe('Homepage',function(){
    const reg = new Homepage();
    it.skip('register',function(){
        cy.visit("https://shop.demoqa.com/my-account/")
       
        reg.fillusername().type('master')
        reg.fillemailaddress().type('bonfacegithinji64@gmail.com')
        reg.fillpassword().type('masterplanner1234#')
        reg.submit().click()
 })
    it('test login',function(){
        cy.visit("https://shop.demoqa.com/my-account/")
        const lgn = new login()
        lgn.usename().type('master')
        lgn.password().type('masterplanner1234#')
        lgn.checkbtn().check()
        lgn.loginbutton().click()
        cy.title().should('be.equal', 'My Account – ToolsQA Demo Site')
        cy.get('.page-title').should('have.text','My Account')
        cy.get('.home > span').should('have.text','ToolsQA Demo Site').click()
        cy.title().should('be.equal','ToolsQA Demo Site – ToolsQA – Demo E-Commerce Site')
        cy.get('#slide-6-layer-4').should('have.text','umbra blue \nDress ')
        //click items.ADD products to cart
        cy.get('.post-1497 > .noo-product-inner > h3 > a').click()
        cy.get('.product_title').should('have.text','pink drop shoulder oversized t shirt')
        cy.get('#pa_color').select('pink')
        cy.get('#pa_size').select('36')
        cy.get('.noo-quantity-attr').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click();
        cy.get('.wc-proceed-to-checkout > .checkout-button').click()
        cy.get('.page-title').should('have.text','Checkout')
        cy.get('#billing_first_name').clear().type('mansur')
        cy.get('#billing_last_name').clear().type('githinji')
        // select country dynamic dropdown
        cy.get('#select2-billing_country-container').type('Ken')
        
        cy.get('#select2-billing_country-results').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Kenya') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            } 
          })
          cy.get('#billing_address_1').clear().type('4500')
          cy.get('#billing_city').clear().type('Nairobi')
          cy.get('#select2-billing_state-container').type('Bun')
          cy.get('#select2-billing_state-results').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Bungoma') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            } 
          })
          cy.get('#billing_postcode').clear().type('1000')
          cy.get('#billing_phone').clear().type('071617282')
          cy.get('#billing_email').clear().type('bonfacegithinji64@gmail.com')
          cy.get('#order_comments').clear().type('Thank you alot')
          cy.get('#terms').check()
          cy.get('#place_order').click()
         
  })
    
})
