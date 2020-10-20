const db = require('../database/index.js');




const getAllReviews = (params, callback) => {
  const q = `SELECT * FROM review_list where id_restaurants = ?`;
  console.log(db)
 db.connection.query(q, params, callback);
}

const postNewReview =  ( params, callback) => {
  console.log(params,"params!!!!!")
  const q = 'INSERT INTO review_list (id_restaurants, avatar, first_name, last_name, number_of_reviews, locale, create_date_month, create_date_day, create_date_year, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)  '
  db.connection.query(q, params, callback);
}

const deleteReview =  (id, callback) => {
const q ='DELETE FROM review_list WHERE id = ?'
db.connection.query(q, [id], callback);
}

const updateReivew = (params, callback) => {
  const update = 'INSERT review_list set (id_restaurants, avatar, first_name, last_name, number_of_reviews, locale, create_date_month, create_date_day, create_date_year, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) where id = 2002';

 db.connection.query(update, params, callback);

}


module.exports = {
  getAllReviews,
  updateReivew,
  deleteReview,
  postNewReview,

};

// ON DUPLICATE KEY UPDATE (id_restaurants, avatar, first_name, last_name, number_of_reviews, locale, create_date_month, create_date_day, create_date_year, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters'