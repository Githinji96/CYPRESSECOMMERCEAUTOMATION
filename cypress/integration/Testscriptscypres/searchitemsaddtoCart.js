///<reference types = "cypress"/>
import { recurse } from 'cypress-recurse'
import login from '../PageObject/loginpage'
describe('search items add to cart',function(){
  it('verify search', function(){
    cy.visit("https://shop.demoqa.com/my-account/")
    const lgn = new login()
    lgn.usename().type('master')
    lgn.password().type('masterplanner1234#')
    lgn.checkbtn().check()
    lgn.loginbutton().click()
        cy.get('.noo-search > .icon_search').click()
        cy.get('.form-control').type('TOKYO TALKIES{enter}')
        cy.get('#color').select('Black').should('have.value','Black')
        cy.get('#size').select('M').should('have.value','M')
        cy.get('.quantity').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').contains('View cart').click()
        cy.get('[name="update_cart"]').click()
        cy.get('.qty-increase').click({ multiple: true })
        cy.get('.continue').click()
        //cy.get('.pull-right > :nth-child(2) > .noo-woo-filter').select('Pink')
       // cy.get(':nth-child(3) > .noo-woo-filter').select('44')
         cy.wait(2000)
         cy.get(':nth-child(3) > .orderby').select('Sort by latest',{force:true})
         cy.get('.pull-right > :nth-child(4) > .noo-woo-filter').select('List',{force:true})
         cy.get('.post-1225 > .noo-product-inner > .noo-product-inner-content > .product-list-meta > .product_type_variable').click()
         cy.get('#pa_color').select('Black')
         cy.get('#pa_size').select('Small')
         cy.get('.quantity').clear().type(1)
         cy.get('.single_add_to_cart_button').click();
         cy.get('.woocommerce-message > .button').click()
         cy.get(':nth-child(1) > .product-remove > .icon_close_alt2').click()
         cy.get('.empty-cart').click()
         cy.get('.cart-empty').contains('Your cart is currently empty.')
         cy.get('.return-to-shop > .button').click()
          
         //verify pagination
         
       
            
  })
      
        it.skip('verify pagination', function(){
          cy.visit("https://shop.demoqa.com/shop/")
         
          
          recurse(()=>
          cy.get('ul.page-numbers > :nth-child(2) > .page-numbers'),
            ($next)=>$next.hasClass('enabled'),{
              post(){
                cy.get('.next').click()
              }
            }
          )
})

})