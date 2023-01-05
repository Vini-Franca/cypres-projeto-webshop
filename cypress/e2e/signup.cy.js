import signup from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";

describe('Signup', function () {
    it('Realizar Cadastro', function () {
        var faker_data = SignupFactory.faker_data();
        const expectedMessage = 'Your registration completed';  

        signup.go();
        signup.filform(faker_data);
        signup.submit();
        signup.alertMessageRegistration(expectedMessage)
    })

    it.skip('Realizar login com credenciais válidas', function () {
        var client_data = SignupFactory.client_data();
        const expectedEmail = client_data.email;  

        signup.go();
        signup.login(client_data);
        signup.loginValidation(expectedEmail) 
    })
})