const { Given, Then, When } = require("@cucumber/cucumber");
const { expect } = require("chai");
const PrintMessage = require("../pages/print");

Given("I know my Java Script", function () {
  this.printMessage = new PrintMessage();
  this.printMessage.messagePrint("I know JAVA SCRIPT");
});

When("I wrote the code to print hello world", function () {
  this.message = "hello world";
  this.printMessage.messagePrint(this.message);
});

Then("hello world is printed", function () {
  expect(this.message).equal("hello world");
});
