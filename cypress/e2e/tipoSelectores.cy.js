beforeEach(() => {
  cy.visit("/automation-practice-form");
});
describe("Tipos de Selectores", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Selector por tag", () => {
    cy.get("input"); //obtener elemento por tag name
    cy.get('input[placeholder="First Name"]'); //obtener elemento por un atributo y tag name
    cy.get("#lastName"); //obtener elemento por su Id
    cy.get(".mr-sm-2.form-control"); //obtener elemento por sus clases
    cy.contains("Reading"); //obtener elemento por su contenido (contains) .header-wrapper
    cy.contains(".header-wrapper", "Widgets"); //obtener elemento por su clase y texto de contenido (contains)
    cy.get('input[placeholder="First Name"]').parent(); //obtener el elemento padre
    cy.get('input[placeholder="First Name"]').parents().find("label"); //obtener los elementos padre
    cy.get("form").find("label"); //obtener los elementos Atravez del padre
    cy.get('input[placeholder="First Name"]')
      .parents("form")
      .then((form) => {
        const inputs = form.find("input");
        const div = form.find("div");
        const label = form.find("label");
        expect(inputs.length).to.eq(15);
        expect(div.length).to.eq(70);
        expect(label.length).to.eq(16);
      });
    cy.url().should("include", "demoqa.com"); //validar que la url contenga  sierto texto
    cy.get("#lastName")
      .should("be.visible")
      .and("have.attr", "placeholder", "Last Name"); //validar de que un elemento este visible y tenga un atributo
  });
  it("Aserciones", () => {
    cy.get("#lastName").then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr("placeholder", "Last Name");
      assert.equal(element.attr("placeholder"), "Last Name");
    });
  });
});
