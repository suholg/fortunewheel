const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


var name = "unknown";

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get('/', function (req, res){
  res.send('Running on function get!')
})




app.get('/name', function (req, res){
  res.json({
    username: name

  })



})

app.post('/name', function (req, res) {
  name = req.body.name;
  res.json({
    username: name
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
