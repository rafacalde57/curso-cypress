import { LoginMethods } from "./pages/login/login.mehods";
import { Logger } from "./util/logger"; 

describe('template spec', () => {
  it('passes', () => {
    const username = 'random01';
    const password = 'random01';

    Logger.stepNumber(1);
    Logger.step('Navigate to Demoblaze page');
    cy.visit('https://www.demoblaze.com/')

    Logger.stepNumber(2);
    Logger.step('Click on Login Link');
    cy.get('#login2').click()

    Logger.stepNumber(3);
    Logger.step(`Login with credentials ${username}/${password}`);
    LoginMethods.login(username, password)
    Logger.verification(`The home page should show "Welcome ${username}" text`)
    cy.get('#nameofuser').should('contain.text', username)
    
    cy.wait(3000) 
  })
})