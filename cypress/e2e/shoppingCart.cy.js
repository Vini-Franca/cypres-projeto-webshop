import SignupFactory from "../factories/SignupFactory";
import ShoppingCartPage from "../pages/ShoppingCartPage";

describe('Adicionar produtos ao carrinho', function () {
    it('Adicionar um livro ao carrinho', function () {
        var client_data = SignupFactory.client_data();
       const expectedMessage = 'The product has been added to your ';  

        ShoppingCartPage.go();
        ShoppingCartPage.login(client_data);
        ShoppingCartPage.addBook();
        ShoppingCartPage.addToCartValidation(expectedMessage);
    })
})