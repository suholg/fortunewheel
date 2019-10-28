const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


var name = "unknown";

app.use(express.json());
app.use(express.text());
app.use(cors());

app.post('/name', function (req, res) {
  console.log(req.body);
  name = req.body.name;
  res.json("Wczytane imię: "+ name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
