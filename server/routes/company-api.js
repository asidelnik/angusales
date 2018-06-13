const express = require('express')
const router = express.Router();

var Company = require('./company-model');

router.get('/', (req, res) => {
    /* 
        1. Call company-model get (table) method with await to get a promise
        2. Return the data with res.send
    */

    // res.send(JSON.stringify("Here I am.   you like a hurricane."));
})