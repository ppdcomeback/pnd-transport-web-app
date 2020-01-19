var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pnd-web-serv'
  }
})

var conknextion = knex.connect(function (err:any) {
  if (err) throw err
  console.log('Connected Success!')
})
