import {basePage, baseUrl, user, existingUser} from "../pages/BasePage";
import {expensePage} from "../pages/ExpensePage";
import {api} from "../steps/api-step"
import {car, expense} from "../pages/GaragePage";
import {garageStep} from "../steps/garage-step";

describe ('Add new car by existing user', () => {
    let carId // змінна для збереження id нової машини
    beforeEach(()=>{
        cy.visit('/');
    })

    it.skip('Test adding new car', ()=> {
        api.signUp(user).then(response => {
            expect(response.status).to.eq(201);
        });
        garageStep.loginExistingUser(user.email, user.password);
        garageStep.addNewCar(car);
        api.getCars().then(res => {
            expect(!!res.body.data.length).to.be.true
        });
    })

    it('Test adding new car', ()=> {
        api.signIn(existingUser).then(response => {
            expect(response.status).to.eq(200);
        });
        cy.visit('/panel/garage');
        cy.intercept('POST','/api/cars').as('currentCar'); // створюємо interception для перевірки статусу та збереження id нової машини
        garageStep.addNewCar(car)
        cy.wait('@currentCar').then(res => {
            expect(res.response.statusCode).to.eq(201)
            return cy.wrap(res.response.body.data.id).as('carId')
        });
        cy.get('@carId').then(id => {
            carId = id // зберігаємо id нової машини
        })
        cy.intercept('GET','/api/cars').as('allCars'); // перехоплюємо перелік авто для перевірки існування створеного авто
        cy.visit('/panel/garage');
        cy.wait('@allCars').then((res) => {
            let newCarIsPresent = false
            for (let i in res.response.body.data) {
                if (res.response.body.data[i].id === carId) {
                    newCarIsPresent = true
                    expect(res.response.body.data[i].brand).to.equal(car.brand)
                    expect(res.response.body.data[i].model).to.equal(car.model)
                }
            }
            expect(newCarIsPresent).to.be.true
        })
    })

    it('Test adding new expense', ()=> {
        api.signIn(existingUser).then(response => {
            expect(response.status).to.eq(200);
        });
        cy.addExpense(carId).then(response => {
        // api.addExpenses(carId).then(response => { // створюємо через API та валідуємо expense для машини з відповідним id
            expect(response.status).to.eq(200);
            expect(response.body.data.carId).to.eq(carId);
            expect(response.body.data.reportedAt).to.eq(expense.reportedAt);
            expect(response.body.data.mileage).to.eq(expense.mileage);
            expect(response.body.data.liters).to.eq(expense.liters);
            expect(response.body.data.totalCost).to.eq(expense.totalCost);
        });
    })

    it('Test checking new expense', ()=> {
        api.signIn(existingUser).then(response => {
            expect(response.status).to.eq(200);
        });
        cy.visit('/panel/expenses'); // валідуємо створений expense через UI
        expensePage.carSelect().should('have.text',car.brand + ' ' + car.model)
        expensePage.line1Date().should('have.text',expense.reportedAt.slice(8,10) + '.' + expense.reportedAt.substring(5,7) + '.' + expense.reportedAt.substring(0,4))
        expensePage.line1Mileage().should('have.text',expense.mileage)
        expensePage.line1Liters().should('have.text',expense.liters + 'L')
        expensePage.line1Cost().should('have.text',expense.totalCost + ' USD')
    })
})


