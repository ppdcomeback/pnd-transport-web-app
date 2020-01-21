import express from 'express'

let server = express()

const mysql = require('mysql')
const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pnd-web-serv'
}
const connection = mysql.createConnection(config)
server.listen(3000, function () {
  console.log('Server Listen at http://localhost:3000')
})
export default connection
