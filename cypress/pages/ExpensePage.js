import {BasePage} from "./BasePage";

export class ExpensePage extends BasePage{

    carSelect() {
        return cy.xpath('//button[@id="carSelectDropdown"]')
    }

    addExpenseButton() {
        return cy.xpath('//button[text()="Add an expense"]')
    }

    //addFuelExpense_modal
    addExpenseCloseButton() {
        return cy.xpath('//button[@class="close"]')
    }

    addExpenseVehicle() {
        return cy.xpath('//select[@id="addExpenseCar"]')
    }

    addExpenseDate() {
        return cy.xpath('//input[@id="addExpenseDate"]')
    }

    addExpenseDateButton() {
        return cy.xpath('//button[@class="btn date-picker-toggle"]')
    }

    addExpenseMileage() {
        return cy.xpath('//input[@id="addExpenseMileage"]')
    }

    addExpenseLiters() {
        return cy.xpath('//input[@id="addExpenseLiters"]')
    }

    addExpenseTotalCost() {
        return cy.xpath('//input[@id="addExpenseTotalCost"]')
    }

    addExpenseCancelButton() {
        return cy.xpath('//button[text()="Cancel"]')
    }

    addExpenseAddButton() {
        return cy.xpath('//button[text()="Add"]')
    }
}
