import { CartElements } from "./cart.elements";

export class CartMehods {
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName) {
        CartElements.links.delete(productName).should('be.visible');
    }
}