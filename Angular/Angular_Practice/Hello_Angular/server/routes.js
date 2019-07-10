const bp = require("body-parser");
const api = require("./controllers");

function router(app) {
    app.use(bp.json());
}

module.exports = router;