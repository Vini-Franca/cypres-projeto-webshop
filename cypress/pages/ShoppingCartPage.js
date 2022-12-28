class ShoppingCartPage {
    go() {
      cy.visit("https://demowebshop.tricentis.com/");
      cy.title("Demo Web Shop");
    }
  
    addBook() {
        cy.get('a[href="/books"]').first().click();
        cy.get('a[href="/fiction"]').last().click();
        cy.get('input[class="qty-input"]').click().clear();
        cy.get('input[class="qty-input"]').type("3");
        cy.get('input[id="add-to-cart-button-45"]').click();
    }

  
    addToCartValidation(expectedMessage) {
      cy.contains(expectedMessage);
    }

    login(client_data) {
        cy.get("a[class='ico-login']").click();
        cy.get('input[id="Email"]').type(client_data.email);
        cy.get('input[id="Password"]').type(client_data.password);
        cy.get("input[class='button-1 login-button']").click();
      }
  }
  
  export default new ShoppingCartPage();
  