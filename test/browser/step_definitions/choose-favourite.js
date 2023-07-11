const { Given, Then, When } = require("@cucumber/cucumber");
const { ChooseFavouritePage } = require("../pages");
const { expect } = require("chai");

Given(
  /^they (?:have )?start(?:ed)? the address journey$/,
  async function () {}
);

Then(/they should see the choose favourite page$/, async function () {
  const chooseFavouritePage = new ChooseFavouritePage(this.page);

  expect(chooseFavouritePage.isCurrentPage()).to.be.true;
});

Then("they continue to ??", async function () {
  const chooseFavouritePage = new ChooseFavouritePage(this.page);
  await chooseFavouritePage.continue();
});
