const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello, My Server'))


//Build Simple RESTful API 
app.get('/getData', function (req, res) {
  res.send('Lack of Parameter')
})
app.get('/getData?number=xyz​', function (req, res) {
  res.send('Wrong Parameter')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))