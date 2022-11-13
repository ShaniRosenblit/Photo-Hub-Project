const express = require('express');
const fs = require('fs').promises;
const router = express.Router();


router.post('/setConfigure', (async (req, res) => {
    let config = req.body.config;
    await fs.writeFile('dbConfig.json',JSON.stringify(config)).catch((err)=> console.log(err));
    res.json(config);
}));

router.get('/getConfigure', (async (req, res) => {
    try {
        let config = await fs.readFile('dbConfig.json').catch((err)=> console.log(err));
        let configObj = JSON.parse(config)
        res.json(configObj);
    } catch (err) {
        console.log(err);
    }
}));

module.exports = router;