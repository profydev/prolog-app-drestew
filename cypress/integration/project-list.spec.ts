import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { version } from "package.json";
import { sendStatusCode } from "next/dist/server/api-utils";
import { sendResponse } from "next/dist/server/image-optimizer";

describe("Project List", () => {
  // before(() => {
  //   cy.intercept("GET", "https://prolog-api.profy.dev/project", (req) => {
  //     req.destroy()
  //   }).as("getFailedRequest")
  //
  //   cy.visit("http://localhost:3000/dashboard")
  //
  //   cy.wait("@getFailedRequest")
  //
  //   context("Error handling", () => {
  //     it('display error message', () => {
  //       cy.get('[data-cy="error"]').should('not.exist')
  //     })
  //   })
  // })

  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // check if project list exists when loading spinner is rendered
    //cy.get("[data-cy='loading-spinner']").siblings("li").should("not.exist");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("display the footer", () => {
      cy.get("footer").within(($footer) => {
        cy.wrap($footer).contains(`${version}`);
        cy.wrap($footer).contains("Docs");
        cy.wrap($footer).contains("API");
        cy.wrap($footer).contains("Help");
        cy.wrap($footer).contains("Community");
        cy.wrap($footer)
          .find("img")
          .should("have.attr", "src", "/icons/logo-small.svg");
      });
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statuses = ["Critical", "Warning", "Stable"];
      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(capitalize(statuses[index]));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        })
        .siblings("[data-cy='loading-spinner']")
        .should("not.exist");
    });
  });

  context("error handling", () => {
    it("display the error message", () => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        statusCode: 404,
      }).as("networkFailure");
      cy.visit("http://localhost:3000/dashboard");
      cy.wait("@networkFailure");
      cy.get('[data-cy="error"]', { timeout: 15000 }).should("exist");
    });
  });
});
