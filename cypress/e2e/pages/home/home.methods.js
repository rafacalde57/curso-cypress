import { HomeElements } from "./home.elements";

export class HomeMethods {
    static clickOnPhonesOption() {
        HomeElements.categoriesMenu.phones.click();
    }

    static clickOnLaptopsOption() {
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorsOption() {
        HomeElements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink(producName) {
        HomeElements.product(producName).click();
    }

    static verifyProductDisplayed(producName) {
        HomeElements.product(producName).should("be.visible");
    }

    static verifyHomePageIsShown(){
        cy.url().should('include', 'home.html');
    }
}