const db = require('../database/postgres/postgresSQL.js');




const getAllReviews = (params, callback) => {
  const q = `SELECT * from review_list r INNER JOIN users u ON u.id = r.id_user WHERE r.id_restaurants = $1`;
  // console.log(db.db, "the db info!!!")
 db.db.query(q,params, callback);
}

const postNewReview =  ( params, callback) => {
  console.log(params,"params!!!!!")
  const q = 'INSERT INTO review_list (id_restaurants, avatar, first_name, last_name, number_of_reviews, locale, create_date_month, create_date_day, create_date_year, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)  '
  db.query(q, params, callback);
}

const deleteReview =  (id, callback) => {
const q ='DELETE FROM review_list WHERE id = $1'
db.connection.query(q, [id], callback);
}

// ;
const updateReivew = (params, callback) => {
  const update = 'INSERT review_list set (id_restaurants, avatar, first_name, last_name, number_of_reviews, locale, create_date_month, create_date_day, create_date_year, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) where id = 2002';

 db.connection.query(update, params, callback);

}


module.exports = {
  getAllReviews,
  updateReivew,
  deleteReview,
  postNewReview,

};

// ON DUPLICATE KEY UPDATE (id_restaurants, avatar, first_name, last_name, number_of_reviews, locale, create_date_month, create_date_day, create_date_year, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters'