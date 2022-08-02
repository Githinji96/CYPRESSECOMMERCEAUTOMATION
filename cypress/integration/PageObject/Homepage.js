class Homepage{
  
       
    
     fillusername(){
        return cy.get('#reg_username')
         
     }
     fillemailaddress(){
        return cy.get('#reg_email')   
       
     }
      fillpassword(){
          return cy.get('#reg_password')
          
      }
      submit(){
        return cy.get('.woocommerce-Button')
          
      }
     }
   export default Homepage