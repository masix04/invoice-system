const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const products = require('./product');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'invoice'
});

connection.connect();

const port = process.env.PORT || 4200;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(products(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});