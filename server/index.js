
require('newrelic');
// var cluster = require('cluster');
// var numCPUs = require('os').cpus().length;
const express = require('express');
const path = require('path');

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





//   process.on('exit',  ()=> {console.log( 'exiting program')
//   setTimeout((function() {
//     return process.exit(22);
// }), 5000);
//   ;
//   return process.kill(process.pid)}
//   );
