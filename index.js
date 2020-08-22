const express = require('express');

const app = express();

const { join } = require("path");

const { readFileSync } = require("fs");

var port = process.env.PORT

app.use(express.static('Public'))

app.use("/api", require("./Routes/api"))

app.get('/', (req, res) => {
  res.sendFile(join(process.cwd(), "./html/home.html"))
});


app.listen(port, function(){console.log('server started')});