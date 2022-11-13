const { AsyncNedb } = require('nedb-async');
const express = require('express');
const fs = require('fs').promises;
const router = express.Router();

const dbFileCategories = new AsyncNedb({
    filename: 'dbCategory.db',
    autoload: true,
});
router.post('/addCategory', (async (req, res) => {
    let category = req.body.category;
    await dbFileCategories.asyncInsert(category);
    res.json(category);
}));

router.get('/getCategories', (async (req, res) => {
    try{
        let images =await dbFileCategories.asyncFind({})
        res.json(images);
      } catch (err){
        console.log(err);
      }
}));

module.exports = router;