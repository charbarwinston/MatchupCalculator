var express = require('express');
var router = express.Router();

router.get('/index', (req, res) => {
  res.sendFile(__dirname + "../" + "public" + "/" + "index.html");
});

module.exports = router;
