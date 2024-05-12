import {existingUser} from "../pages/BasePage";
import {expense} from "../pages/GaragePage"
export class API {
    signIn(user) {
        return cy.request({
            method: 'POST',
            url: '/api/auth/signin',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: {
                "email": user.email,
                "password": user.password,
                "remember": false
            }
                })//.as('login');
    }

    signUp(user) {
        return cy.request({
            method: 'POST',
            url: '/api/auth/signup',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: {
                "name": user.name,
                "lastName": user.lastName,
                "email": user.email,
                "password": user.password,
                "repeatPassword": user.password
            }
        })//.then(response => {
            // expect(response.status).to.eq(201)
            // return cy.wrap(response.body.data.userId).as('userId')  // Приклад збереження значення поля userId в еліас 'userId'
        //});
        // cy.get('@userId').then(id => {  // Приклад подальшого використання (виводу) значення, збереженого раніше через еліас 'userId'
        //     cy.log(id)
        // })
    }

    getCars() {
        return cy.request({
            method: 'GET',
            url: '/api/cars',
        })
    }

    addNewCar() {
        return cy.request({
            method: 'POST',
            url: '/api/cars',
            // headers: {
            //     "accept": "application/json",
            //     "Content-Type": "application/json",
            // },
            body: {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 77
            }
        })
    }

    addExpenses(carId) {
        // cy.log(carId)
        return cy.request({
            method: 'POST',
            url: '/api/expenses',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: {
                "carId": carId,
                "reportedAt": expense.reportedAt,
                "mileage": expense.mileage,
                "liters": expense.liters,
                "totalCost": expense.totalCost,
                "forceMileage": expense.forceMileage
            }
        })
    }
}

export const api = new API();

