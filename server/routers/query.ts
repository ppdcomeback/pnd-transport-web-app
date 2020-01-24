var express = require('express')
var router = express.Router()
const task = require('../task')
const cndb = require('../connectdb')

cndb.connect()

router.get('/task', (req, res) => {
  let sql = 'SELECT * FROM users'
  let query = cndb.query(sql, (err, results) => {
    if (err) throw err
    console.log(results)
    res.json(results)
  })
})
