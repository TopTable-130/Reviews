const { Pool } = require('pg')
const config = require('./config.js')
const db = new Pool(config)
var connection = db.connect()
db.query(`SELECT * FROM restaurants where id = 5;`, (err, res) => {
  console.log(err ? err.stack : res.rows[0]) // Hello World!
  // removed end
  // db.end()
})


module.exports ={
  db,

}
