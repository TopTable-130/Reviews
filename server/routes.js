const controller = require (`./controller.js`)
const app = require ('./index.js')

app.get(`/resturant/:id/reviews`,controller.getAllReviews)

app.post(`/resutrant/:id/review/:user`, controller.postNewReview)

app.patch(`/resutrant/:id/reivews/:reviewId`, controller.updateReview)

app.delete('/resturant/:id/reviews/:reviewId', controller.deleteReview)