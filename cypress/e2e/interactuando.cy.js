describe('Interactuando con los elementos', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    it('Dar Click', () => {
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should("be.visible")
    });
    it('Dar dobleClick', () => {
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should("be.visible")
    });
    it.only('Manejo de formularios', () => {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Miguel')
        cy.get('#lastName').type('Mariano')
        cy.get('#userEmail').type('estesmicorre@gmail.com')
        cy.get('#firstName').type('{selectAll}{backspace}')//borrar
        cy.get('#firstName').type('Pedro')
    });
});