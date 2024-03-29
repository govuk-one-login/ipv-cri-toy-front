const { Given, When, Then } = require("@cucumber/cucumber");

const { RelyingPartyPage } = require("../pages");
const { expect } = require("chai");

Given(/^([A-Za-z ]+) is using the system$/, async function (_name) {
  //   this.user = this.allUsers[name];

  const rpPage = new RelyingPartyPage(this.page, this.TESTING_CLIENT_ID);

  await rpPage.goto();
});

Given("they have been redirected as a success", function () {
  const rpPage = new RelyingPartyPage(this.page);

  expect(rpPage.isRelyingPartyServer()).to.be.true;
  expect(rpPage.hasSuccessQueryParams()).to.be.true;
});

Then(
  "they should be redirected as an error with a description {string}",
  function (err) {
    const rpPage = new RelyingPartyPage(this.page);

    expect(rpPage.isRelyingPartyServer()).to.be.true;
    expect(rpPage.hasErrorQueryParams(err)).to.be.true;
  }
);

Then(/^they should be redirected as a success$/, function () {
  const rpPage = new RelyingPartyPage(this.page);

  expect(rpPage.isRelyingPartyServer()).to.be.true;
  expect(rpPage.hasSuccessQueryParams()).to.be.true;
});

Then(/^the error should be (.*)$/, function (error_code) {
  const rpPage = new RelyingPartyPage(this.page);

  expect(rpPage.isRelyingPartyServer()).to.be.true;
  expect(rpPage.isErrorCode(error_code)).to.be.true;
});

When(/^they return to a previous page$/, async function () {
  const rpPage = new RelyingPartyPage(this.page);

  await rpPage.page.goBack();
});

Then(/^it should have a correct verifiable credential$/, async function () {
  if (process.env.USE_RELYING_PARTY == "true") {
    const rpPage = new RelyingPartyPage(this.page);

    const firstName = this.toyName.split("-")[0];
    expect(await rpPage.hasName(firstName)).to.be.true;
  }
});
