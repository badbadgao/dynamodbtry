const express = require('express')
const app = express()
const port = 3000

const getItem = require('./person/PersonGetItem');
const getItems = require('./person/PersonBatchGet');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/person', (req, res) => {
  getItem().then(item => {
    res.send(item)
  })
});


app.get('/persons', (req, res) => {
  getItems().then(items => {
    res.send(items)
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 