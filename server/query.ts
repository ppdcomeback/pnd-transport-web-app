const mysql = require('mysql')
const express = require('express')
const app = express()
var i = 0
var row = ''
const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pnd-web-serv'
}
const connection = mysql.createConnection(config)

// var test = require('./test.json')
app.get('/getlistjob', function (req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  const sql = 'SELECT * FROM listjobs'
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message)
    }
    /* Object.keys(results).forEach(function (key) {
      var row = results[key]
      console.log(row)
      res.send(row)
    }) */
    for (; i <= results.length; i++) {
      row = results[i]
      console.log(row)
      // res.write(row)
    }
    res.send(results)
  })
})

app.listen(3000, function () {
  console.log('Test server')
})
