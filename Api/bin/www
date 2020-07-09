const express = require('express');
const app = express();
const routes = require('../routes');


app.use('/', routes);
app.use(express.static('public'));

const server = app.listen(5000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server listening on 5000");
})