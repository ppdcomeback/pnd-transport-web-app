import query from './connectdb'

const sql = 'SELECT * FROM listjobs'
query.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message)
  }
  console.log(results)
})

export default query
