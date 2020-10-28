/* eslint-disable no-console */

require('newrelic');
const express = require('express');
const path = require('path');

const controller = require (`./controller.js`);


  const app = express();
  const PORT = 3002;

  app.use(express.json())

  app.use(express.static(path.join(__dirname, '../public/')));

  app.get(`/resturant/:id/reviews`,controller.getAllReviews)

  app.post(`/resutrant/:id/review/:user`, controller.postNewReview)

  app.put(`/resutrant/:id/reivews/:reviewId`, controller.updateReivew)

  app.delete('/resturant/:id/reviews/:reviewId', controller.deleteReview)


  const server = app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`listening on port ${PORT}`);
  });

  module.exports = {
    server,
    app,
  };








