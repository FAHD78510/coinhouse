/// <reference  types="cypress" />
describe("test coinhouse", () => {
    it("appointment", () => {
      cy.visit("https://www.coinhouse.com/");
      cy.get("#menu-item-40124").click();
      cy.get("#menu-item-40126").click();
      cy.get('.et_pb_column_18 > .et_pb_button_module_wrapper > .et_pb_button').should("be.visible").click()
      cy.get('[aria-label="Afficher octobre"] > .private-icon > .UIIcon__IconContent-sc-1b7tdiv-0').click()
      cy.get('#available-times-region > :nth-child(2) > .uiButton').should("be.visible").click()
      cy.get('#UIFormControl-10').type('fahd')
      cy.get('#UIFormControl-12').type('rabihi')
      cy.get('#UIFormControl-14').type('rabihif@hotmail.fr')
      cy.get('#UIFormControl-16').type('0767282324')
      cy.get('#UIFormControl-18').type('15000')
      cy.get('.private-button--primary').click()
})
})