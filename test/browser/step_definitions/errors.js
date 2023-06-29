const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("chai");

const { ErrorPage } = require("../pages/error");

When("there is an immediate error", () => {});

Then("they should see the unrecoverable error page", async function () {
  const errorPage = new ErrorPage(this.page);

  const errorTitle = await errorPage.getErrorTitle();

  expect(errorTitle).to.equal(errorPage.getSomethingWentWrongMessage());
});
