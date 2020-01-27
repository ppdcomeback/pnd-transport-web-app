const mysql = require('mysql')

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

export default row
