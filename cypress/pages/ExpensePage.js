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

    addExpenseCost() {
        return cy.xpath('//input[@id="addExpenseTotalCost"]')
    }

    addExpenseCancelButton() {
        return cy.xpath('//button[text()="Cancel"]')
    }

    addExpenseAddButton() {
        return cy.xpath('//button[text()="Add"]')
    }

    // Expenses_table
    line1Mileage() {
        return cy.xpath('//tr[1]/td[2]')
    }

    line1Liters() {
        return cy.xpath('//tr[1]/td[3]')
    }

    line1Cost() {
        return cy.xpath('//tr[1]/td[4]')
    }

    line1Delete() {
        return cy.xpath('//tr[1]//button[@class="btn btn-delete"]')
    }

    line1DeleteConfirmation() {
        return cy.xpath('//button[text()="Remove"]')
    }

}

export const expensePage = new ExpensePage();
export const expense = {
    mileage: 60,
    liters: 10,
    cost: 20,
}