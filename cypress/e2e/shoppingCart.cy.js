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
    });

    it('Adicionar um PC ao carrinho', function () {
        var client_data = SignupFactory.client_data();
        const expectedMessage = 'The product has been added to your ';  

        ShoppingCartPage.go();
        ShoppingCartPage.login(client_data);
        ShoppingCartPage.addPC();
        ShoppingCartPage.addToCartValidation(expectedMessage);
    })

    it('Limpar carrinho', function () {
        var client_data = SignupFactory.client_data();
        const expectedMessage = 'Your Shopping Cart is empty!'  

        ShoppingCartPage.go();
        ShoppingCartPage.login(client_data);
        ShoppingCartPage.clearCart();
        ShoppingCartPage.clearCartValidation(expectedMessage);
    })
})