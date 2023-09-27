# Environment variables

## General

- Environment variables can be set for local development using a `.env` file. An example file is included as a starting point.
- `GITHUB_ACTIONS` is set by default when running as a GitHub Action

| Name              | Description                                                       | Default                                                    |
| :---------------- | :---------------------------------------------------------------- | :--------------------------------------------------------- |
| MOCK_API          | Enable the use of passthrough @mock-api tags into the `client-id` | true                                                       |
| USE_RELYING_PARTY | Start the journey on the Relying Party, not this website          | false                                                      |
| WEBSITE_HOST      | URL of the website to test against                                | http://localhost:5050                                      |
| WEBSITE_PATH      | Path to use as starting point                                     | /oauth2/authorize?request=lorem&client_id=${this.clientId} |
