const express = require('express')
const router = express.Router();

var company = require('../dataAccess/company-model');

router.get('/', async (req, res) => {
    res.send(JSON.stringify(await company.getAllRows()));  
})

module.exports = router;