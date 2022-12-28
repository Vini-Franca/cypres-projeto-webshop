class SignupPage {
    go() {
      cy.visit("https://demowebshop.tricentis.com/");
      cy.title("Demo Web Shop");
      cy.get("a[class='ico-register']").click();
    }
  
    filform(client_data) {
      cy.get('input[id="gender-female"]').click();
      cy.get('input[id="FirstName"]').type(client_data.first_name);
      cy.get('input[id="LastName"]').type(client_data.last_name);
      cy.get('input[id="Email"]').type(client_data.email);
      cy.get('input[id="Password"]').type(client_data.password);
      cy.get('input[id="ConfirmPassword"]').type(client_data.confirm_password);
    }
  
    submit() {
      cy.get('input[id="register-button"]').click();
    }
  
    alertMessageRegistration(expectedMessage) {
      cy.contains(expectedMessage);
    }

    login(client_data) {
        cy.get("a[class='ico-login']").click();
        cy.get('input[id="Email"]').type(client_data.email);
        cy.get('input[id="Password"]').type(client_data.password);
        cy.get("input[class='button-1 login-button']").click();
      }

      loginValidation(expectedEmail) {
        cy.contains(expectedEmail);
      }
  }
  
  export default new SignupPage();
  