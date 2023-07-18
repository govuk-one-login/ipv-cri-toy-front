module.exports = class PlaywrightDevPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.path = "/choose-favourite";
  }

  async continue() {
    await this.page.click("#continue");
  }

  async chooseToy(toyName) {
    await this.page.locator(getFavourtieId(toyName)).check();
  }

  toyIsSelected(toyName) {
    return this.page.locator(getFavourtieId(toyName)).isChecked();
  }

  isCurrentPage() {
    const { pathname } = new URL(this.page.url());

    return pathname == this.path;
  }
};

//TODO: Ids for the radio fields are auto generated and is incorrect for the first item.
function getFavourtieId(toyName) {
  const ids = {
    "dolls-house": "#toy",
    "jigsaw-puzzle": "#toy-jigsawpuzzle",
    "spinning-top": "#toy-spinningtop",
    "train-set": "#toy-trainset",
  };

  return ids[toyName];
}
