const { When, Then, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const ErrorPage = require("../pages/error");

Given("A user is on the system", function () {});

Given("they have started the toy journey", function () {});

When("there is an immediate error", async function () {});

Then("they should see the unrecoverable error page", async function () {
  console.log(this.page);
  this.errorPage = new ErrorPage(this.page);

  const errorTitle = await this.errorPage.getErrorTitle();

  expect(errorTitle).to.equal(this.errorPage.getSomethingWentWrongMessage());
});
