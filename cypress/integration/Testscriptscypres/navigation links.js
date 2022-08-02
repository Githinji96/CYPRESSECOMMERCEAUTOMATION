import login from '../PageObject/loginpage'
describe('navigation links',()=>{
    it('verify navigation links',()=>{
        cy.visit("https://shop.demoqa.com/my-account/")
        const lgn = new login()
        lgn.usename().type('master')
        lgn.password().type('masterplanner1234#')
        lgn.checkbtn().check()
        lgn.loginbutton().click()
        cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click()
       cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        

    })
})