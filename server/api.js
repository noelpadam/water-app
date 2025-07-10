const express = require("express");
var api = express();


const port = 3000

api.get('/', (req, res) => {
  res.send('Hello World!')
});

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});