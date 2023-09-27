module.exports = class PlaywrightDevPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page, clientId) {
    this.page = page;
    this.clientId = clientId || "unspecified-client-id";

    // Starting URL properties
    const websiteHost = process.env.WEBSITE_HOST || "http://localhost:5050";
    this.baseURL = new URL(websiteHost);

    this.oauthPath =
      process.env.WEBSITE_PATH ||
      `/oauth2/authorize?request=lorem&client_id=${this.clientId}`;
    this.startingURL = new URL(this.oauthPath, this.baseURL);

    // Relying Party Return URL
    this.relyingPartyURL =
      process.env.USE_RELYING_PARTY == "true"
        ? this.baseURL
        : new URL("http://example.net");
  }

  async goto() {
    console.log(this.startingURL.toString());
    await this.page.goto(this.startingURL.toString());
  }

  isRelyingPartyServer() {
    const { origin } = new URL(this.page.url());

    console.log(this.relyingPartyURL);
    return origin === this.relyingPartyURL.origin;
  }

  hasSuccessQueryParams() {
    const { searchParams } = new URL(this.page.url());

    if (process.env.MOCK_API == "true") {
      return (
        searchParams.get("client_id") && // FIXME: Restore checking of client_id
        searchParams.get("state") === "sT@t3" &&
        searchParams.get("code").startsWith("auth-code-")
      );
    }

    return (
      searchParams.has("client_id") &&
      searchParams.has("state") &&
      searchParams.has("code")
    );
  }

  hasErrorQueryParams(code) {
    const { searchParams } = new URL(this.page.url());
    return (
      searchParams.get("error") === "server_error" &&
      searchParams.get("error_description") === code
    );
  }

  isErrorCode(code) {
    const { searchParams } = new URL(this.page.url());

    return searchParams.get("error") && searchParams.get("error") === code;
  }

  async hasName(name) {
    const vcCode = await this.page
      .locator(".govuk-details__text pre code")
      .textContent();

    return vcCode.includes(name);
  }
};
