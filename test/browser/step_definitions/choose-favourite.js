const { Given, Then, When } = require("@cucumber/cucumber");
const { ChooseFavouritePage } = require("../pages");
const { expect } = require("chai");

Then(/they should see the choose favourite page$/, async function () {
  const chooseFavouritePage = new ChooseFavouritePage(this.page);

  expect(chooseFavouritePage.isCurrentPage()).to.be.true;
});

Then("they choose {string} as their favourite toy", async function (toyName) {
  this.toyName = toyName;

  const chooseFavouritePage = new ChooseFavouritePage(this.page);
  await chooseFavouritePage.selectToy(toyName);
  expect(chooseFavouritePage.toyIsSelected(toyName));
});

Then("they continue from choose favourite", async function () {
  const chooseFavouritePage = new ChooseFavouritePage(this.page);
  await chooseFavouritePage.continue();
});
