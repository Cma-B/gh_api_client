describe("user can see the search result", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=cma",
     
    });

    cy.visit("/");
  });
  //it(" user can search for username", () => {
   // cy.get("#search").type("Cma-B");
    //cy.get("#button").click();
  //});

  it("user can see the search result", () => {
    cy.get("#search-result").should("contain", "Cma-B")
  });


});
