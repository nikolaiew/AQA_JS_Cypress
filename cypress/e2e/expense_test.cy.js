import {basePage, baseUrl, user} from "../pages/BasePage";
import {car} from "../pages/GaragePage";
import {generalStep} from "../steps/general-step";
import {garageStep} from "../steps/garage-step";
import {expenseStep} from "../steps/expense-step";
import {expense} from "../pages/ExpensePage";

describe ('Test Expense Page', () => {  // Test Suit
    before(()=>{
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        generalStep.signUp(user);
        generalStep.login(user);
        garageStep.addNewCar(car);
        basePage.logoutButton().click();
    })

    beforeEach(()=>{
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        generalStep.login(user);
        basePage.expenseButton().click();
    })

    afterEach(()=>{
        basePage.logoutButton().click();
    })

    after(()=>{
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        generalStep.login(user);
        garageStep.delNewCar();
        basePage.logoutButton().click();
    })

    it('Test adding new expense', ()=> {  // Test Case
        expenseStep.addNewExpense(expense);
        expenseStep.addNewExpenseCheck(expense);
    })

    it('Test deleting new expense', ()=> {  // Test Case
        expenseStep.delNewExpense();
        expenseStep.delNewExpenseCheck();
    })
});

