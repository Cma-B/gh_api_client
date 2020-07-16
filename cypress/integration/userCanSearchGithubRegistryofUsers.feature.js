describe("users can search the github registry of users", () => {
    before (() => {
        cy.server();
        cy.route({
            method:"GET",
            response: "fixture:users.json",

        })
        cy.get("#search").within(() => {
            cy.get("#name").type("text");
            cy.get('button').contains("Search").click()
        })
        cy.get("#message").should("contain", )
    })
})