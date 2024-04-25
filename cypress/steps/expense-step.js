import {expensePage} from "../pages/ExpensePage";
import {car} from "../pages/GaragePage"
import {GeneralStep} from "./general-step";

export class ExpenseStep extends GeneralStep{
    addNewExpense(expense) {
        expensePage.addExpenseButton().click();
        expensePage.addExpenseMileage().clear();
        expensePage.addExpenseMileage().type(car.mileage + expense.mileage);
        expensePage.addExpenseLiters().type(expense.liters);
        expensePage.addExpenseCost().type(expense.cost);
        expensePage.addExpenseAddButton().click();
    }

    addNewExpenseCheck(expense) {
        expensePage.line1Mileage().should('have.text',car.mileage + expense.mileage);
        expensePage.line1Liters().should('have.text',expense.liters + 'L');
        expensePage.line1Cost().should('have.text',expense.cost + ' USD');
    }

    delNewExpense() {
        expensePage.line1Delete().click({force:true});
        expensePage.line1DeleteConfirmation().click();
    }

    delNewExpenseCheck() {
        expensePage.line1Mileage().should('not.exist')
    }
}

export const expenseStep = new ExpenseStep();
