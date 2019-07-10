// IMPORTS
const express = require("express");
const path = require("path");
const router = require("./server/routes");

// SETUP
const app = express();
app.use(express.static(__dirname + 'public/dist/public'));
app.set('views', path.join(__dirname, 'public/dist/public'));

// ROUTES
router(app);

// LISTENING
app.listen(8000, function() {
    console.log("listening on port 8000");
})