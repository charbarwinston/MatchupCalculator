var express = require('express');
var router = express.Router();

router.get('/index', (req, res) => {
  res.sendFile(__dirname + "../" + "public" + "/" + "index.html");
});

router.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Charlie', lastName: 'Neff'},
    {id: 1, firstName: 'Zachary', lastName: 'Wright'},
    {id: 1, firstName: 'Bob', lastName: 'Iscool'},
  ];

  res.json(customers);
});

module.exports = router;
