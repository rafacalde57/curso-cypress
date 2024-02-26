import { LoginMethods } from "./pages/login/login.mehods";

describe('template spec', () => {
  it('passes', () => {
    const username = 'random01';
    const password = 'random01';
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    LoginMethods.login(username, password)
    cy.get('#nameofuser').should('contain.text', username)
    cy.wait(5000) 
  })
})