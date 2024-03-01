import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.mehods";
import { CartElements } from "./cart.elements";

export class CartMehods {
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName) {
        CartElements.links.delete(productName).should('be.visible');
    }

    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html');
    }

    static clickOnPlaceOrderButton() {
        CartElements.buttons.placeOrder.click();
    }

    static deleteProducts() {
        cy.contains('a', 'Delete').each(link => {
            link.click();
            cy.wait(1000)
        })  
    }

    static emptyCart(username, password) {
        Logger.subStep('Navigate to demo page');
        CommonPageMethods.naviateToDemoPage();
        Logger.subStep('Log Out');
        CommonPageMethods.logout();
        Logger.subStep('Click on login option');
        CommonPageMethods.clickOnLoginOption();
        Logger.subStep(`Login with this credentials ${username}/${password}`);
        LoginMethods.login(username, password);
        Logger.subStep('Click on Cart option');
        CommonPageMethods.clickOnCartOption();
        Logger.subStep('Delete products');
        this.deleteProducts();
    }
}