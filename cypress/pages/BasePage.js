export class BasePage {
    // homePage
    signInButton() {
        return cy.xpath('//button[text()="Sign In"]')
    }

    signUpButton() {
        return cy.xpath('//button[text()="Sign up"]')
    }

    // homePage_Sign_In_Form
    signInEmail() {
        return cy.xpath('//input[@id="signinEmail"]')
    }

    signInPassword() {
        return cy.xpath('//input[@name="password"]')
    }

    loginButton() {
        return cy.xpath('//button[text()="Login"]')
    }

    // homePage_Sign_Up_Form
    signUpName() {
        return cy.xpath('//input[@id="signupName"]')
    }

    signUpLastName() {
        return cy.xpath('//input[@id="signupLastName"]')
    }

    signUpEmail() {
        return cy.xpath('//input[@id="signupEmail"]')
    }

    signUpPassword() {
        return cy.xpath('//input[@id="signupPassword"]')
    }

    signUpRepeatPassword() {
        return cy.xpath('//input[@id="signupRepeatPassword"]')
    }

    registerButton() {
        return cy.xpath('//button[@class="btn btn-primary"]')
    }

    // header
    headerLogo() {
        return cy.xpath('//a[@class="header_logo"]');
    }

    headerGarageButton() {
        return cy.xpath('//a[@routerlinkactive="-active"][text()="Garage"]');
    }

    headerFuelButton() {
        return cy.xpath('//a[@routerlinkactive="-active"][text()="Fuel expenses"]');
    }

    headerInstructionsButton() {
        return cy.xpath('//a[@routerlinkactive="-active"][text()="Instructions"]');
    }

    headerMyProfileDropDown() {
        return cy.xpath('//button[@id="userNavDropdown"]');
    }

    headerMyProfileGarageButton() {
        return cy.xpath('//a[@routerlinkactive="disabled"][text()="Garage"]');
    }

    headerMyProfileFuelButton() {
        return cy.xpath('//a[@routerlinkactive="disabled"][text()="Fuel expenses"]');
    }

    headerMyProfileInstructionsButton() {
        return cy.xpath('//a[@routerlinkactive="disabled"][text()="Instructions"]');
    }

    headerMyProfileProfileButton() {
        return cy.xpath('//a[@routerlinkactive="disabled"][text()="Profile"]');
    }

    headerMyProfileSettingsButton() {
        return cy.xpath('//a[@routerlinkactive="disabled"][text()="Settings"]');
    }

    headerMyProfileLogoutButton() {
        return cy.xpath('//button[text()="Logout"]');
    }

    // footer
    footerCopyright() {
        return cy.xpath('//p[contains(text(),"©")]');
    }

    footerDescribe() {
        return cy.xpath('//p[contains(text(),"Hillel auto")]');
    }

    footerLogo() {
        return cy.xpath('//*[name()="svg" and @_ngcontent-dwm-c57]');
    }

    //left_side_menu_registered
    garageButton() {
        return cy.xpath('//a[@routerlink="garage"]');
    }

    expenseButton() {
        return cy.xpath('//a[@routerlink="expenses"]');
    }

    instructionsButton() {
        return cy.xpath('//a[@routerlink="instructions"]');
    }

    profileButton() {
        return cy.xpath('//a[@routerlink="profile"]');
    }

    settingsButton() {
        return cy.xpath('//a[@routerlink="settings"]');
    }

    logoutButton() {
        return cy.xpath('//nav/a[not(@routerlink)]');
    }

    /////////////////////

    garageUrlCheck() {
        return cy.url().should('contain', '/panel/garage')
    }

    profileName() {
        return cy.xpath('//p[@class="profile_name display-4"]')
    }

    fulfillingSignUpForm(user) {
        this.signUpName().type(user.name).should('have.value', user.name);
        this.signUpLastName().type(user.lastName).should('have.value', user.lastName);
        this.signUpEmail().type(user.email).should('have.value', user.email);
        this.signUpPassword().type(user.password).should('have.value', user.password);
        this.signUpRepeatPassword().type(user.password).should('have.value', user.password);
    }

    fulfillingSignInForm(user) {
        this.signInEmail().type(user.email).should('have.value', user.email);
        this.signInPassword().type(user.password).should('have.value', user.password);
    }

    registerValidation(user) {
        this.garageUrlCheck();
        this.profileButton().click();
        this.profileName().should('contain', user.name + ' ' + user.lastName)
    }
}

export const basePage = new BasePage();
export const baseUrl = 'qauto2.forstudy.space/'
export const user = userGen()  // генеруємо дані юзера

export function getRandom(min, max) { // функція генерації числа від min до max включно
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function userGen() {  // функція генерації даних юзера (як варіант)
    const names = ['Noah', 'Liam', 'Mason', 'James', 'Jacob', 'Ethan', 'John', 'Sten', 'Tim', 'Bill']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor']
    const user = {}
    user.name = names[getRandom(0,9)]
    user.lastName = lastNames[getRandom(0,9)]
    user.email = user.name.toLowerCase() + '_' + user.lastName.toLowerCase() + getRandom(10,99) + '@testmail.com'
    user.password = user.name + getRandom(10000,99999)
    return user
}

