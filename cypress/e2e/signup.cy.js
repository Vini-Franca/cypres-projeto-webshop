import signup from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";

describe('Signup', function () {
    it.skip('Realizar Cadastro', function () {
        var client_data = SignupFactory.client_data();
        const expectedMessage = 'Your registration completed';  

        signup.go();
        signup.filform(client_data);
        signup.submit();
        signup.alertMessageRegistration(expectedMessage)
    })

    it('Realizar login com novas credenciais', function () {
        var client_data = SignupFactory.client_data();
        const expectedEmail = client_data.email;  

        signup.go();
        signup.login(client_data);
        signup.loginValidation(expectedEmail) 
    })
})