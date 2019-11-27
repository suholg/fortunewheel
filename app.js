const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dupa12345',
  database: 'kolofortuny'
})

connection.connect()


var name = "unknown";

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get('/', function (req, res){
  res.send('Running on function get!')
})




app.get('/name', function (req, res){
    //express js jak wyciągnąć element row select * from user limit 1
  res.json({

  })



})
app.post('/name', function (req, res) {
  name = req.body.name;

  connection.query(`INSERT INTO user (name) VALUES ('${req.body.name}');`, function (err, rows, fields) {
    if (err) throw err
  })



  //jak się udało zwracamy res.JSON
  //jak się nie udało to zwracamy res.JSON error
  res.json({
    username: name
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
