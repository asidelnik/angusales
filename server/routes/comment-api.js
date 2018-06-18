const express = require('express');
const router = express.Router();
var comment = require('../dataAccess/comment-model');


router.get('/:id', async (req, res) => {
    res.send(JSON.stringify(await comment.getAllRows(req.params.id)));
})

router.delete('/:id', async (req, res) => {
    let customerId = req.params.id;
    // await comment.deleteComment(customerId);
    await comment.deleteCustomerComments(customerId);
    res.send(JSON.stringify("success"));
});

module.exports = router;


/* 
    1. Call commnet-model get rows method with await to get a promise
    2. Return the data with res.send
*/

// res.send(JSON.stringify("Here I am.   you like a hurricane."));