var express = require('express')
var bodyParer = require('body-parser')
var cors = require('cors')
var app = express()
var port = 3101
app.use(cors())
const mysql = require('mysql')
var configdb = require('./connectdb')

app.listen(port, function () {
  console.log('Server Listen at http://localhost:' + port)
})
