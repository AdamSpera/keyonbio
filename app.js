require('dotenv').config();
var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.MYSQLUSERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Database Connected');
  }
})

app.use(express.static('public'));
app.listen(80, '0.0.0.0', function () {
  console.log('Server is listening on port 80');
})

app.get('/', function (req, res) {
  console.log(`[/]: Get request received at '/'`);
  res.sendFile('public/index.html', { root: __dirname });
})

app.post('/data', (req, res) => {
  let body = ''; req.on('data', function (chunk) { body += chunk; });
  req.on('end', function () {
    console.log(`[/data]: Post request received at '/data' (${body})`);

    connection.query(`INSERT INTO ${process.env.DATABASE}.${process.env.TABLE} (email) VALUES (${body});`, function (error, result, field) {
      if (!!error) {
        console.log('[/data]: There was an issue saving data'); console.log(error);
        res.send('Failed');
      } else {
        console.log('[/data]: Success saving data!'); console.log(result);
        res.send('Confirmed');
      }
    });

  })
})