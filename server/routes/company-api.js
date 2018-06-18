const express = require('express')
const router = express.Router();

var company = require('../dataAccess/company-model');

router.get('/', async (req, res) => {
    res.send(JSON.stringify(await company.getAllRows()));  
})

router.post('/', async (req, res) => {
    let newCompany = req.body;
    await company.addCompany(newCompany);
    res.send(JSON.stringify(await company.getAllRows()));
});

module.exports = router;