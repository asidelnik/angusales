
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// var mongoose = require('mongoose');


// Mongoose
// mongoose.connect('mongodb://localhost/wordsDB', function () {
//     console.log("DB connection established!!!");
// })
// var Word = require('./models/wordModel');


// Get our API routes
const companyAPI = require('./server/routes/company-api'); // ('./server/routes/api');
const customerAPI = require('./server/routes/customer-api');
const commentAPI = require('./server/routes/comment-api');
//...

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/Angusales')));
app.use(express.static(path.join(__dirname, 'node_modules')));


// Set our api routes
app.use('/company-api', companyAPI);
app.use('/customer-api', customerAPI); // use enables the midddleware, which is customerAPI
app.use('/comment-api', commentAPI);

// Catch all other routes and return the index file
app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Angusales/index.html'));      //'dist/index.html'
});

/**
 * Get port from environment and store in Express.
 */
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));