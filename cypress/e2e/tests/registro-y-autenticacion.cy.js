import { CommonPageData } from "../pages/common-page/common-page.data"
import { CommonPageMethods } from "../pages/common-page/common-page.methods"
import { SignupElements } from "../pages/signup/signup.elements"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../util/logger"

describe(CommonPageData.testSuites.registroYAutenticacion, ()=>{
    it("Registro de un usuario válido", ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.naviateToDemoPage()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
        CommonPageMethods.clickOnSignupOption()

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida.')
        SignupMethods.insertUsername('first_test')
        SignupMethods.insertPassword('first_test')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful"')
        SignupMethods.verifySignUpSuccessfulMessageDisplayed();
    })
})

// Paso 1: Navegar a la página de inicio.
// Paso 2: Hacer clic en "Sign up" en la barra de navegación.
// Paso 3: Completar todos los campos obligatorios con información válida.
// Paso 4: Hacer clic en "Sign up" para registrar el usuario.
// Paso 5: Verificar que se redirige al usuario a la página de inicio de sesión