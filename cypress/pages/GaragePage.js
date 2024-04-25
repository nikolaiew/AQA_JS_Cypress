import {BasePage} from "./BasePage";

export class GaragePage extends BasePage{

    card1CarName() {
        return cy.xpath('//li[1]//p[@class="car_name h2"]')
    }

    card1Mileage() {
        return cy.xpath('//li[1]//input[@name="miles"]')
    }

    // AddCar_modal
    addCarButton() {
        return cy.xpath('//button[text()="Add car"]')
    }

    addCarCloseButton() {
        return cy.xpath('//button[@class="close"]')
    }

    addCarBrand() {
        // return cy.get("#addCarBrand")
        return cy.xpath('//select[@id="addCarBrand"]')
    }

    addCarModel() {
        return cy.xpath('//select[@id="addCarModel"]')
    }

    addCarMileage() {
        return cy.xpath('//input[@id="addCarMileage"]')
    }

    addCarCancelButton() {
        return cy.xpath('//button[text()="Cancel"]')
    }

    addCarAddButton() {
        return cy.xpath('//button[text()="Add"]')
    }

    // carCard
    editCarButton() {
        return cy.xpath('//ul/li[1]//button[@class="car_edit btn btn-edit"]')
    }

    addFuelExpenseButton() {
        return cy.xpath('//ul/li[1]//button[@class="car_add-expense btn btn-success"]')
    }

    mileageEnter() {
        return cy.xpath('//ul/li[1]//input[@name="miles"]')
    }

    mileageUpdateButton() {
        return cy.xpath('//ul/li[1]//button[@type="submit"]')
    }

    // EditCar_modal
    editCarCloseButton() {
        return cy.xpath('//button[@class="close"]')
    }

    editCarBrand() {
        return cy.get("#addCarBrand")
        // return cy.xpath('//select[@id="addCarBrand"]')
    }

    editCarModel() {
        return cy.xpath('//select[@id="addCarModel"]')
    }

    editCarMileage() {
        return cy.xpath('//input[@id="addCarMileage"]')
    }

    editCarDate() {
        return cy.xpath('//input[@id="carCreationDate"]')
    }

    editCarDateButton() {
        return cy.xpath('//button[@class="btn date-picker-toggle"]')
    }

    editCarRemoveButton() {
        return cy.xpath('//button[text()="Remove car"]')
    }

    editCarCancelButton() {
        return cy.xpath('//button[text()="Cancel"]')
    }

    editCarSaveButton() {
        return cy.xpath('//button[text()="Save"]')
    }

    fulfillingAddCarForm() {

    }

    editCarRemoveAcceptButton() {
        return cy.xpath('//button[text()="Remove"]')
    }

    editCarRemoveCancelButton() {
        return cy.xpath('//button[text()="Cancel"]')
    }
}

export const garagePage = new GaragePage();
export const car = {
    brand: 'Ford',
    model: 'Fusion',
    mileage: 100
}

// export const car = carGen();  // генератор машин
//
// export function carGen() {
//     const vehicle = [
//         {'Audi':['TT','R8','Q7','A6','A8']},
//         {'BMW':['3','5','X5','X6','Z3']},
//     ]
// }
