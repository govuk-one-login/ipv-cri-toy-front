const { Given, Then, When } = require("@cucumber/cucumber");
const { ChooseFavouritePage } = require("../pages");
const { expect } = require("chai");

Then(/they should see the choose favourite page$/, async function () {
  const chooseFavouritePage = new ChooseFavouritePage(this.page);

  expect(chooseFavouritePage.isCurrentPage()).to.be.true;
});

Then("they choose {string}", async function (toyName) {
  const chooseFavouritePage = new ChooseFavouritePage(this.page);

  await chooseFavouritePage.chooseToy(toyName);
  expect(chooseFavouritePage.toyIsSelected(toyName));
});

Then("they continue", async function () {
  const chooseFavouritePage = new ChooseFavouritePage(this.page);
  await chooseFavouritePage.continue();
});
