import {basePage, baseUrl, user} from "../pages/BasePage";
import {car} from "../pages/GaragePage";
import {generalStep} from "../steps/general-step";
import {garageStep} from "../steps/garage-step";

describe ('Test Garage Page', () => {  // Test Suit
    before(()=>{  // "одноразовий" хук по створенню юзера
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        generalStep.signUp(user);
    })

    beforeEach(()=>{  // "багаторазовий" хук для логіну під існуючим юзером
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        generalStep.login(user);
    })

    afterEach(()=>{  // "багаторазовий" хук для логауту
        basePage.logoutButton().click();
    })

    it('Test adding new car', ()=> {  // Test Case
        garageStep.addNewCar(car);
        garageStep.addNewCarCheck(car);
    })

    it('Test deleting new car', ()=> {  // Test Case
        garageStep.delNewCar();
        garageStep.delNewCarCheck();
    })
});

