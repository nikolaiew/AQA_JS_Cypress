import {basePage, baseUrl, user} from "../pages/BasePage";
import {generalStep} from "../steps/general-step";

describe ('Test Qauto Sign In', () => {  // Test Suit
    before(()=>{  // "одноразовий" хук по створенню юзера
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        generalStep.signUp(user);
    })

    beforeEach(()=>{  // "багаторазовий" хук для логіну під існуючим юзером
        generalStep.login(user);
    })

    it('Test Sign in Garage', ()=> {  // Test Case
        basePage.garageUrlCheck();
    })
});

