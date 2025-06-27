const express = require('express')
const router = express.Router();
const db = require('../config');

router.get('/', async (req, res) => {
    try {
        res.json(await db.getItems());
    } catch(err) {
        res.json(err);
    }
});

module.exports = router;