describe('emails sets',()=>{

  context('Password reset',()=>{
      const serverId = 'j30menwb'
      const serverDomain='j30menwb.mailosaur.net'
      const emailAddress= 'password-reset@'+serverDomain
     
it('should be possible to request a reset',()=>{
    cy.visit( 'https://shop.demoqa.com/my-account/lost-password/')
    cy.get('#user_login').type(emailAddress)
    cy.get('.woocommerce-Button').click()

    cy.mailosaurGetMessage(serverId,{
        sentTo:emailAddress
    }).then(email=>{
        cy.log(email.subject)
    passwordResetLink = email.html.links[0].href
    })
 
 it('should allow passwordvreset',()=>{
    const validPassword = 'masterplanner123'

      cy.visit(passworddResetLink)
    // cy.title().should('contain', 'Change your password')
    //cy.get('#password').type(validPassword)
    //cy.get('#confirmPassword').type(validPassword)
   // cy.get('form').submit() 
})
})
  })
})
