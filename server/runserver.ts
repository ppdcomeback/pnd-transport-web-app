const mysql = require('mysql')
const express = require('express')
const moment = require('moment')
const app = express()

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
    res.send(results)
    console.log('ok')
  }
  )
})

app.listen(3000, function () {
  console.log('Test server')
})
