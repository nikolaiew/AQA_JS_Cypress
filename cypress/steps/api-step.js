
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
                "email": "john_brown39@testmail.com",
                "password": "John40611",
                "remember": false
            }
                }).as('login');
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
}

export const api = new API();
