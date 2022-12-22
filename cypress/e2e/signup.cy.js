import signup from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";

describe('Signup', function () {
    it('Realizar Cadastro', function () {
        var signup_data = SignupFactory.signup_data();
        const expectedMessage = 'Your registration completed';  

        signup.go();
        signup.filform(signup_data);
        signup.submit();
        signup.alertMessageRegistration(expectedMessage)
    })

    it('Realizar login com nova credencial', function () {
        var signup_data = SignupFactory.signup_data();
        const expectedEmail = signup_data.email;  

        signup.go();
        signup.login(signup_data);
        signup.loginValidation(expectedEmail) 
    })
})