import { CartElements } from "./cart.elements";

export class CartMehods {
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }
}