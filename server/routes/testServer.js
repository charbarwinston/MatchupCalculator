const express = require('express');

var router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Server is working properly");
});

module.exports = router;