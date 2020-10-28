const { Pool } = require('pg')
const config = require('./config.js')
const db = new Pool(config)
var connection = db.connect()
console.log(db)
db.query(`SELECT * FROM restaurants where id = $1;`,['5'], (err, res) => {
  console.log(err ? err.stack : res.rows[0]) // returns 1 results
})


module.exports ={
  db,
connection,
}
