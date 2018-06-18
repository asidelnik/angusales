const express = require('express');
const router = express.Router();

var customer = require('../dataAccess/customer-model');

// New line
var comment = require('../dataAccess/comment-model');

// router - type of middleware function
// An object to which serveral server requests can be assigned to

router.get('/', async (req, res) => {
    res.send(JSON.stringify(await customer.getAllRows()));
})

router.post('/', async (req, res) => {
    let newCustomer = req.body;
    await customer.addCustomer(newCustomer);
    res.send(JSON.stringify(await customer.getAllRows()));
});

router.delete('/:id', async (req, res) => {
    let customerId = req.params.id;
    // await comment.deleteComment(customerId);
    await customer.deleteCustomer(customerId);
    res.send(JSON.stringify(await customer.getAllRows()));
});








// ---------------------------------------------------------------------------------------------
// Older requests ------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// router.get('/requiredParamRoute/:field', (req, res) => {
//     // example request: http://localhost:3000/optionalParamsRoute/jona
//     params = req.params
//     res.send(JSON.stringify(`You sent ${params['field']}`))
// })

// router.get('/optionalParamsRoute', (req, res) => {
//     // example request: http://localhost:3000/optionalParamsRoute/?name=jona&age=27
//     params = req.query
//     res.send(JSON.stringify(`You sent ${params}`));
// })







// router.get('/word-count/:field', (req, res) => {
//     let searchedWord = req.params.toLowerCase();

//     db.words.aggregate(
//         [
//             {
//                 $match: {
//                     word: searchedWord
//                 }
//             },
//             {
//                 $count: "same_words"
//             }
//         ]
//     )



//     Word.find({ name: word }, function (err, rslt) {
//         if (err) { return console.error(err); }
//         console.log(rslt);
//     })

//     // query db for word count
//     // for - iterate 
//     // mongodb query - modelName.find
//     res.send(JSON.stringify(`"${params}" count is query count `))
// })




module.exports = router;



// Old Post code
    // for (let index = 0; index < dbWordsCollection.length; index++) {
        //     if (word == dbWordsCollection[index].word) {
        //         dbWordsCollection[index].counter++;
        //     } else {
        //         let newWord = new Word({
        //             word: word,
        //             count: 1,
        //         });
        //         newWord.save();
        //     }
        // }
        // res.send - eror or success
        // res.send(post);



// db.list.aggregate([
    //     {
    //         $group: {
    //             _id: { CERT: "$CERT" },
    //             uniqueIds: { $addToSet: "$_id" },
    //             count: { $sum: 1 }
    //         }
    //     }
    // ]);