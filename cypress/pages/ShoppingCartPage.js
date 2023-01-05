class ShoppingCartPage {
    go() {
      cy.visit("https://demowebshop.tricentis.com/");
      cy.title("Demo Web Shop");
    }
    
    login(client_data) {
      cy.get("a[class='ico-login']").click();
      cy.get('input[id="Email"]').type(client_data.email);
      cy.get('input[id="Password"]').type(client_data.password);
      cy.get("input[class='button-1 login-button']").click();
    }
  
    addBook() {
        cy.get('a[href="/books"]').first().click();
        cy.get('a[href="/fiction"]').last().click();
        cy.get('input[class="qty-input"]').click().clear();
        cy.get('input[class="qty-input"]').type("3");
        cy.get('input[id="add-to-cart-button-45"]').click();
    }

    addPC() {
      cy.get('a[href="/computers"]').first().click();
      cy.get('h2[class="title"]').first().click();
      cy.get('a[href="/build-your-own-expensive-computer-2"]').last().click();
      cy.get('input[id="product_attribute_74_5_26_82"]').click();
      cy.get('input[id="product_attribute_74_6_27_85"]').click();
      cy.get('input[id="product_attribute_74_3_28_87"]').click();
      cy.get('input[id="product_attribute_74_8_29_89"]').click();
      cy.get('input[id="add-to-cart-button-74"]').click();
  }

    addToCartValidation(expectedMessage) {
      cy.contains(expectedMessage);
    }

    clearCart() {
      cy.get('span[class="cart-label"]').first().click();
      cy.get('input[name="removefromcart"]')
      .as('checkboxes')
      .check();
      cy.get('input[name="updatecart"]').click()
    }

    clearCartValidation(expectedMessage) {
      cy.contains(expectedMessage);
    }
  }
  
  export default new ShoppingCartPage();
  