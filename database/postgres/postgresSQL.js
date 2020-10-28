const { Pool } = require('pg')
const config = require('./config.js')
const db = new Pool(config)
var connection = db.connect()
db.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  // removed end
  // db.end()
})


const getRestaurantRating = (id, callback) => {
  const q = `SELECT * FROM restaurants where id = ${id};`;
  console.log(q)
  db.query(q, (err, data) => {
    if (err) {
      console.log('error in db select * from transactions query',err.stack);
      callback(err);
    } else {
      // console.log('successful MySQL select * from transactions query');
      console.log(data)
      callback(null, data.rows[0]);
    }
  });
};

const getReviewList = (id, callback) => {
  const q = `SELECT * FROM review_list where id_restaurants = ${id};`;
  db.query(q, (err, data) => {
    if (err) {
      console.log('error in MySQL select * from transactions query');
      callback(err);
    } else {
      console.log('successful MySQL select * from transactions query');
      callback(null, data);
    }
  });
};

const getAllUsers = (callback) => {
  const q = 'SELECT * FROM users where id = 5';
  db.query(q, (err, data) => {
    if (err) {
      console.log('error in MySQL select * from transactions query');
      callback(err);
    } else {
      console.log('successful MySQL select * from transactions query');
      callback(null, data);
    }
  });
};

module.exports ={
  db,
  getRestaurantRating,
  getReviewList,
  getAllUsers,
}