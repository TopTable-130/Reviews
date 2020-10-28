
require('newrelic');
var cluster = require('cluster');
const express = require('express');
var numCPUs = require('os').cpus().length;
const path = require('path');
const db = require('../database/postgres/index.js');
const controller = require (`./controller.js`);

  const app = express();
  const PORT = 3002;
  // swithching out body parse to native javascript middleware
  app.use(express.json())
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
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



cluster.on('exit', function(worker, code, signal) {
  console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);
  cluster.fork();
});


