class SignupPage {
    go() {
      cy.visit("https://demowebshop.tricentis.com/");
      cy.title("Demo Web Shop");
      cy.get("a[class='ico-register']").click();
    }
  
    filform(signup_data) {
      cy.get('input[id="gender-female"]').click();
      cy.get('input[id="FirstName"]').type(signup_data.first_name);
      cy.get('input[id="LastName"]').type(signup_data.last_name);
      cy.get('input[id="Email"]').type(signup_data.email);
      cy.get('input[id="Password"]').type(signup_data.password);
      cy.get('input[id="ConfirmPassword"]').type(signup_data.confirm_password);
    }
  
    submit() {
      cy.get('input[id="register-button"]').click();
    }
  
    alertMessageRegistration(expectedMessage) {
      cy.contains(expectedMessage);
    }

    login(signup_data) {
        cy.get("a[class='ico-login']").click();
        cy.get('input[id="Email"]').type(signup_data.email);
        cy.get('input[id="Password"]').type(signup_data.password);
        cy.get("input[class='button-1 login-button']").click();
      }

      loginValidation(expectedEmail) {
        cy.contains(expectedEmail);
      }
  }
  
  export default new SignupPage();
  