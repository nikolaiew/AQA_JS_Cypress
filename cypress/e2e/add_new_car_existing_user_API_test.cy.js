import {basePage, baseUrl, user} from "../pages/BasePage";
import {api} from "../steps/api-step"
import {car} from "../pages/GaragePage";
import {garageStep} from "../steps/garage-step";

describe ('Add new car by existing user', () => {
    beforeEach(()=>{
        cy.visit('/');
    })

    it('SignUp via API', ()=> {
        api.signUp(user).then(response => {
            expect(response.status).to.eq(201);
        });
        garageStep.loginExistingUser(user.email,user.password);
        garageStep.addNewCar(car);
        api.getCars().then(res => {
            expect(!!res.body.data.length).to.be.true
        });
    })
})

