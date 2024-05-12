import {garagePage} from "../pages/GaragePage"
import {GeneralStep} from "./general-step";

export class GarageStep extends GeneralStep{
    addNewCar(car) {
        garagePage.addCarButton().click();
        garagePage.addCarBrand().select(car.brand)
        garagePage.addCarModel().select(car.model)
        garagePage.addCarMileage().type(car.mileage);
        garagePage.addCarAddButton().click();
    }

    addNewCarCheck(car) {
        garagePage.card1CarName().should('have.text',car.brand + ' ' + car.model)
        garagePage.card1Mileage().should('have.value',car.mileage)
    }

    delNewCar() {
        garagePage.editCarButton().click();
        garagePage.editCarRemoveButton().click();
        garagePage.editCarRemoveAcceptButton().click();
    }

    delNewCarCheck() {
        garagePage.editCarButton().should('not.exist')
    }
}

export const garageStep = new GarageStep();
