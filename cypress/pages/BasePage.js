export class BasePage {
    // homePage
    signUpButton() {
        return cy.xpath('//button[@class="hero-descriptor_btn btn btn-primary"]')
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

    fuelButton() {
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

    registerValidation(user) {
        this.garageUrlCheck();
        this.profileButton().click();
        this.profileName().should('contain', user.name + ' ' + user.lastName)
    }
}
