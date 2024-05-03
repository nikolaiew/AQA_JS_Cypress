import {basePage} from "../pages/BasePage"

export class GeneralStep {
    signUp(user) {
        basePage.signUpButton().click();
        basePage.fulfillingSignUpForm(user);
        basePage.registerButton().click();
        basePage.garageUrlCheck();
        basePage.logoutButton().click();
    }

    login(user) {
        basePage.signInButton().click();
        basePage.fulfillingSignInForm(user);
        basePage.loginButton().click();
    }

    loginExistingUser(email,password) {
        basePage.signInButton().click();
        basePage.signInEmail().type(email).should('have.value', email);
        basePage.signInPassword().type(password).should('have.value', password);
        basePage.loginButton().click();
    }
}

export const generalStep = new GeneralStep();