import querydb from './connectdb'

const sql = 'SELECT * FROM listjob'
querydb.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message)
  }
  console.log(results)
})

export default querydb
