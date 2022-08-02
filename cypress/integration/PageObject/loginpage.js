class login{
    usename(){
        return cy.get('#username')
    }
    password(){
        return cy.get('#password')
    }
    checkbtn(){
        return cy.get('#rememberme')
    }
     loginbutton(){
         return cy.get(':nth-child(3) > .woocommerce-button')
     }
}
export default login