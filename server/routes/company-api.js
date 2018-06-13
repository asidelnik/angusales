const express = require('express')
const router = express.Router();

var company = require('../dataAccess/company-model');

router.get('/', (req, res) => {
    // res.send(JSON.stringify(company.getAllRows()));
    /* 
        1. Call company-model get (table) method with await to get a promise
        2. Return the data with res.send
    */

    // res.send(JSON.stringify("Here I am.   you like a hurricane."));
})

module.exports = router;