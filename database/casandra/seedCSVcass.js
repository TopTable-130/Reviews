const fs = require('fs');
const csvWriter = require('csv-write-stream');
var faker = require('faker');
// var writer1 = csvWriter();
// var writer2 = csvWriter()
// var writer3 = csvWriter()

// create array of first names 500 long
var firstNames = []
var lastNames = []
var makeNames = () => {

  for (var i = 0; i < 10000; i++) {
    firstNames.push(faker.name.firstName())
    lastNames.push(faker.name.lastName())
  }
}
makeNames()

// Random number generator function
const randomInt = (max) => {
  return Math.floor(Math.random() * max) + 1
}

//
//Random location generatior

var location = []
genLocation = () => {
  for (var i = 0; i < 201; i++) {
    location.push(faker.address.city())
  }
}
genLocation()
//

var userArr = []

const dataGenUsers = (seed) => {
  var writer1 = csvWriter();
  writer1.pipe(fs.createWriteStream('users.csv'));
  var counter = 1;
  var countImage = 0

  for (var i = 0; i < seed; i++) {


    userArr.push(user)
    var user = {
      id: counter += 1,
      avatar: `https://sdc-reviews-130.s3-us-west-1.amazonaws.com/image${countImage}.jpg`,
      first_name: firstNames[randomInt(10000)],
      last_last: lastNames[randomInt(10000)],
      number_of_reviews: randomInt(120) + randomInt(120),
      locale: location[randomInt(200)]
    }

    writer1.write(user)

    // iterate counter for image ID
    if (countImage === 2000) {
      countImage = 0;
    } else {
      countImage += 1
    }

  }

  writer1.end();

  console.log("done generating users ")
  // console.log(userArr,"user array for grabbing things")
};


// function to help generate names of resutrants. Note Repeats are bound to happend are should be identified or destingished by location and ID number.
const restaurnantNameGen = () => {

  const start = ["", "The ", "Eat ", "La ", "Cafe ", "Tacorea ", "Del ", "Foreign ", "Great ", "Koi ", "Old ", "Rich ", "Original ", "The ", "Ramen ", "Zuni ", "Vientian ", "Common ", "Californian ", "Burger ", "Bob's ", "French ", "Wood ", "Lazy ", "Moonlight ", "Sushi ", "Pho ", "Sweet ", "Round ", "Thai ", "The Old ", "Soul ", "Royal ", "New ", "Gourmet ", "Teriyaki ", "Pier ", "Fish ", "Gava ", "Bosco's ", "Italian ", "", "Clairs ", "Mexican "];

  const middle = ["", "Track ", "Basil ", "House ", "Farm ", "Green ", "Food ", "", "Pizza ", "Fine ", "Plate ", "", "Carousel ", "Cafe ", "Bento ", "Italian ", "Noodle ", "", "King ", "Lim ", "", "Country ", "Mare ", "Olive ", "Lemon ", "Indian ", "Fire ", "Pizza "];

  const end = ["", "And SeaFood", "Bar", "Pub", "And Grill", "Restaurant And Bar", "House", "Panda", "Lounge", "Steak House", "Kitchen", "Eatery", "Brewery", "Brew Pub", "Kong", "Club", "Table", "Light", "BBQ", "Chili", "Bakery", "Cafe", "Sports Bar", "Chinnese", "Bell", "Cannery", "Garden", "Fish", "Tacos", "Marketplace And Deli", "Sports Bar"];


  var intStart = start.length - 1;
  var intMiddle = middle.length - 1;
  var intEnd = end.length - 1;

  var name = `${start[randomInt(intStart)]}${middle[randomInt(intMiddle)]}${end[randomInt(intEnd)]}`
  return name
}

const filterArr = ["", 'breakfast', 'brunch', 'lunch', 'dinner', 'drinks', 'live music'];

const lovedForArr = ["", 'Great for couples', 'Great night scene', 'Great for singles', 'Great for families', 'Great for brunch', 'Great for catching up'];

const noiseArr = ["", 'do not recall', 'quiet', 'moderate', 'energetic'];

const StartRating = () => {
  let ratingObj = {}
  ratingObj.five = Math.random().toFixed(2);
  ratingObj.four = (Math.random() * (1 - ratingObj.five)).toFixed(2);
  ratingObj.three = (Math.random() * (1 - (Number(ratingObj.five) + Number(ratingObj.four)))).toFixed(2);
  ratingObj.two = (Math.random() * (1 - (Number(ratingObj.five) + Number(ratingObj.four) + Number(ratingObj.three)))).toFixed(2);
  ratingObj.one = (Math.random() * (1 - (Number(ratingObj.five) + Number(ratingObj.four) + Number(ratingObj.three) + Number(ratingObj.two)))).toFixed(2);
  return ratingObj;
}

const dataGenRestaurant = (seed) => {
  var writer1 = csvWriter();
  writer1.pipe(fs.createWriteStream('restaurnt.csv'));
  var counter = 0;

  for (var i = 0; i < seed; i++) {

    var stars = StartRating()

    writer1.write({
      id: counter += 1,
      name_of_restaurant: restaurnantNameGen(),
      number_of_reviews: randomInt(25),
      rating_overall: (Math.random() * 5).toFixed(2),
      rating_recent: (Math.random() * 5).toFixed(2),
      rating_food: (Math.random() * 5).toFixed(2),
      rating_service: (Math.random() * 5).toFixed(2),
      rating_ambience: (Math.random() * 5).toFixed(2),
      noise_level: noiseArr[randomInt(4)],
      would_recommend: Math.floor(Math.random()),
      percent_five_star: stars.five,
      percent_four_star: stars.four,
      percent_three_star: stars.three,
      percent_two_star: stars.two,
      percent_one_star: stars.one,
      loved_for: lovedForArr[randomInt(6)],
      filters: filterArr[randomInt(6)]
    })
  }
  writer1.end();
  console.log("done")
  return 'done'
};


const messages = [""]
const messageGen = (seed) => {
  for (var k = 0; k < seed; k++) {
    messages.push(faker.lorem.paragraph())
  }
}

messageGen(1000)
// date generation over three montsh
// zero padding helper function
var zeroPadd = (number) => {
  if (number < 10) {

    return '0' + number
  }
  else {
    return number
  }
}

dateGen = () => {
  var day = zeroPadd(randomInt(28))
  var month = zeroPadd(randomInt(12));
  var year = 2000
  return newDate = `${year}-${month}-${day}`
}

const dataGenReviews = async (seed, reviewbyRestName, reviewByUserName) => {
  var writer1 = csvWriter();
  var writer2 = csvWriter();
  writer1.pipe(fs.createWriteStream(reviewbyRestName));
  writer2.pipe(fs.createWriteStream(reviewByUserName));
  var counter = 0;
  var numberOfUsers = userArr.length - 1
  for (var k = 0; k < seed; k++) {
    if (k % 1000 === 0) {
      console.log(k)
    }
    var user = userArr[randomInt(numberOfUsers)]

    var reviewObj = {
      id_restaurants: randomInt(500),
      id_user: user.id,
      avatar: user.avatar,
      first_name: user.first_name,
      last_name: user.last_name,
      date_review: dateGen(),
      review_message: messages[randomInt(500)],
      rating_overall: randomInt(5),
      rating_recent: randomInt(5),
      rating_food: randomInt(5),
      rating_service: randomInt(5),
      rating_ambience: randomInt(5),
      noise_level: noiseArr[randomInt(4)],
      would_recommend: Math.floor(Math.random()),
      loved_for: lovedForArr[randomInt(6)],
      filters: filterArr[randomInt(6)]

    };

    var reviewByRestaurant = {
      id: counter += 1,
      id_restaurants: reviewObj.id_restaurants,
      avatar: reviewObj.avatar,
      first_name: reviewObj.frist_name,
      last_name: reviewObj.last_name,
      date_review: reviewObj.date_review,
      review_message: reviewObj.review_message,
      rating_overall: reviewObj.rating_overall,
      rating_recent: reviewObj.rating_recent,
      rating_food: reviewObj.rating_food,
      rating_service: reviewObj.rating_service,
      rating_ambience: reviewObj.rating_ambience,
      noise_level: reviewObj.noise_level,
      would_recommend: reviewObj.would_recommend,
      loved_for: reviewObj.loved_for,
      filters: reviewObj.filters
    }

    var reviewByUsers = {
      id: counter += 1,
      id_user: reviewObj.id_restaurants,
      avatar: reviewObj.avatar,
      first_name: reviewObj.frist_name,
      last_name: reviewObj.last_name,
      date_review: reviewObj.date_review,
      review_message: reviewObj.review_message,
      rating_overall: reviewObj.rating_overall,
      rating_recent: reviewObj.rating_recent,
      rating_food: reviewObj.rating_food,
      rating_service: reviewObj.rating_service,
      rating_ambience: reviewObj.rating_ambience,
      noise_level: reviewObj.noise_level,
      would_recommend: reviewObj.would_recommend,
      loved_for: reviewObj.loved_for,
      filters: reviewObj.filters
    }
    writer2.write(reviewByUsers)
    writer1.write(reviewByRestaurant)

    if (k === (seed * .1) || k === (seed * .2) || k === (seed * .3) || k === (seed * .7) || k === (seed * .5) || k === (seed * .6) || k === (seed * .7) || k === (seed * .8) || k === (seed * .9)) {
      await new Promise(resolve => writer1.once('drain', resolve))
      await new Promise(resolve => writer2.once('drain', resolve))
    }
  }

  writer1.end()
  writer2.end();
  console.log("done", reviewbyRestName, reviewByUserName)
};

function genCSV() {
  dataGenUsers(5000001);
  dataGenReviews(7500000, "reviewbyRest1.csv", "reviewbyuser1.csv");
  dataGenReviews(7500000, "reviewbyRest2.csv", "reviewbyuser2.csv");
  dataGenReviews(7500000, "reviewbyRest3.csv", "reviewbyuser3.csv");
  dataGenRestaurant(10000000)

}
genCSV();


// --max-old-space-size=13824 seedCSVcas.js
