const express = require('express')
const router = express.Router();

var company = require('../dataAccess/company-model');

// Callback - function as a parameter to another function
// (req, res) => {   -  a callback function of get function
// Company.getAllRows()   -   returns a promise
// Extract promise with async (on callback) & await (on promise)
router.get('/', async (req, res) => {
    res.send(JSON.stringify(await company.getAllRows()));
    /* 
        1. Call company-model get (table) method with await to get a promise
        2. Return the data with res.send
    */

    // res.send(JSON.stringify("Here I am.   you like a hurricane."));

    
})

module.exports = router;