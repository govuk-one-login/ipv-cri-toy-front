const BaseController = require("hmpo-form-wizard").Controller;

class ConfirmController extends BaseController {
  async saveValues(req, res, callback) {
    super.saveValues(req, res, async () => {
      const headers = sessionId
        ? { "session-id": req.session.tokenId }
        : undefined; // set the header to null should fail the req but pass the bro

      const favourite = req.sessionModel.get("favourite");

      await axios.post(
        `${POSTCODE_LOOKUP}/${postcode}`,
        {
          headers,
        },
        { toy: favourite }
      );
    });
  }
}

module.exports = ConfirmController;
