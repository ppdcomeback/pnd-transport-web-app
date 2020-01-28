/* const mysql = require('mysql')

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pnd-web-serv'
}
const connection = mysql.createConnection(config)

const sql = 'SELECT * FROM listjobs'
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message)
  }
  // console.log(results)
  // var object = JSON.parse(results)
  // console.log(data)
  Object.keys(results).forEach(function (key) {
    var row = results[key]
    console.log(row)
  })
})
*/

/* const sql = 'SELECT * FROM listjobs'
  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error(error.message)
    }
    for (let i = 0; i < results.length; i++) {
      var row = results[i]
      console.log(row)
      // res.send(results)
    }

  })
}) */
const express = require('express')
const app = express()

var test = require('./test.json')
app.get('/', function (req, res) {
  res.send(test)
})

app.listen(3000, function () {
  console.log('Test server')
})
