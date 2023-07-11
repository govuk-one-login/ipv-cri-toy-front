const BaseController = require("hmpo-form-wizard").Controller;

const {
  API: {
    PATHS: { FAVOURITE },
  },
} = require("../../../lib/config");

class ConfirmController extends BaseController {
  async saveValues(req, res, callback) {
    super.saveValues(req, res, async () => {
      const headers = { "session-id": req.session.tokenId };

      const favourite = req.sessionModel.get("favourite");

      console.log(JSON.stringify(req.sessionModel.toJSON(), null, 2));

      await req.axios.post(`${FAVOURITE}`, { toy: favourite }, { headers });
    });
  }
}

module.exports = ConfirmController;
