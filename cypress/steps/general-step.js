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
}

export const generalStep = new GeneralStep();