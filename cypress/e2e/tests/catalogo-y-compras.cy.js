import { CartMehods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.mehods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYCompras, () => {
    it('Navegación por categorías', () => {

        Logger.stepNumber(1);
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navigate to DemoBlaze page')
        CommonPageMethods.naviateToDemoPage()
        Logger.subStep('Click on "Log In" option')
        CommonPageMethods.clickOnLoginOption()
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2);
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption()
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')
    })

    it('Agregar producto al carrito', () => {

        Logger.stepNumber(1);
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navigate to DemoBlaze page')
        CommonPageMethods.naviateToDemoPage()
        Logger.subStep('Click on "Log In" option')
        CommonPageMethods.clickOnLoginOption()
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2);
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption()

        Logger.stepNumber(4);
        Logger.step('Hacer clic en un producto específico')
        HomeMethods.clickOnProductLink(product)

        Logger.stepNumber(5);
        Logger.step('Verificar que se muestra la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed()

        Logger.stepNumber(6);
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductDetailsMethods.clickOnAddToCartButton()

        Logger.stepNumber(7);
        Logger.step(' Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMehods.verifyProductAdded(product, {timeout: 30000})


    })

});