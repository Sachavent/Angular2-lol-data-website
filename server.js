// server.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: false }));


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);