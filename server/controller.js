const model = require( `./model.js`);


const getAllReviews = (req, res) => {

  const  { id } = req.params;
console.log(id, "the id that is hit")
  const params = [id];
  model.getAllReviews (params, ( err, results) => {
    if (err) {

      console.log(err, "we had an error in getAllReviews")
      res.status(400).send(err)
    } else {
      console.log("winning",results.rows)
      res.status(200).send(results.rows)
    }
  }
  )
};

const postNewReview =  (req, res) => {
  const { id, reviewId } = req.params
  console.log(req.body,req.params)
  const  data = req.body
  console.log("data",data)
  const params = [
    id, data.avatar,data.first_name,data.last_name,data.number_of_reviews,data.locale, data.create_date_month, data.create_date_day, data.create_date_year,data.review_message, data.rating_overall, data.rating_recent, data. rating_food,data.rating_service, data.rating_ambience, data.noise_level, data.would_recommend, data.loved_for, data.filters
  ];

  model.postNewReview (params, (( err, results) => {
    if (err) {
      console.log(err, "we had an error in postNewReviews")
      res.status(400).send(err)
    } else {
      console.log("winning")
      res.status(200).send(results.rows)
    }
  })
  )
};

const deleteReview =  (req, res) => {
  const {id, reviewId} = req.params;
  const params = [reviewId];
  model.deleteReview (params, (( err, results) => {
    if (err) {
      console.log(err, "we had an error in deleteReview")
      res.status(400).send(err)
    } else {
      console.log("winning")
      res.status(200).send(results.rows)
    }
  })
  )
};

const updateReivew = (req, res) => {
  const {id, reviewId} = req.params;
  const data  = req.body;

  const params = [
   data.id_restaurants,data.avatar,data.first_name,data.last_name,data.number_of_reviews,data.locale, data.create_date_month, data.create_date_day, data.create_date_year,data.review_message, data.rating_overall, data.rating_recent, data. rating_food,data.rating_service, data.rating_ambience, data.noise_level, data.would_recommend, data.loved_for, data.filters
  ];
  console.log(params,"!!!!!!")
  model.updateReivew (params, (( err, results) => {
    if (err) {
      console.log(err, "we had an error in updateReviews")
      res.status(400).send(err)
    } else {
      console.log("winning")
      res.status(200).send(results.rows)
    }
  })
  )
};

module.exports = {
  getAllReviews,
  postNewReview,
  deleteReview ,
  updateReivew,
};