import {BasePage} from "./BasePage";

export class GaragePage extends BasePage{

    // AddCar_modal
    addCarButton() {
        return cy.xpath('//button[text()="Add car"]')
    }

    addCarCloseButton() {
        return cy.xpath('//button[@class="close"]')
    }

    addCarBrand() {
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
        return cy.xpath('//select[@id="addCarBrand"]')
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
}
