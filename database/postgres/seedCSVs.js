const fs = require('fs');
const csvWriter = require('csv-write-stream');
var faker = require('faker');
var writer = csvWriter();

// create array of first names 500 long
var firstNames = []
var lastNames = []
var makeNames = () => {

  for (var i = 0; i < 500; i++) {
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
  for (var i = 0; i < 200; i++) {
    location.push(faker.address.city())
  }
}
genLocation()
//

const dataGenUsers = (seed) => {

  writer.pipe(fs.createWriteStream('users.csv'));
  var counter = 0;
  var countImage = 0
  for (var i = 0; i < seed; i++) {


    writer.write({
      // id: counter+=1,
      avatar: `https://sdc-reviews-130.s3-us-west-1.amazonaws.com/image${countImage}.jpg`,
      name: firstNames[randomInt(500)],
      last: lastNames[randomInt(500)],
      number_of_reviews: randomInt(120) + randomInt(120),
    })
    // iterate counter for image ID
    if (countImage = 2000) {
      countImage = 0;
    } else { countImage += 1 }

  }
  writer.end();
  console.log("done")
  return 'done'
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

  writer.pipe(fs.createWriteStream('restaurnt.csv'));
  var counter = 0;

  for (var i = 0; i < seed; i++) {

    var stars = StartRating()
    writer.write({
      // id: counter+=1,
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
  writer.end();
  console.log("done")
  return 'done'
};




// generate reviews

// messsage helper
const messages = [""]
const messageGen = (seed) => {
  for (var i = 0; i < seed; i++) {
    messages.push(faker.lorem.paragraph())
  }
}

messageGen(1000)
// date generation over three montsh

dateGen = () => {
  var day = randomInt(28);
  var month = randomInt(12);
  var year = 2000
  return newDate = `${year}-${month}-${day}`
}

const dataGenReviews = (seed) => {

  writer.pipe(fs.createWriteStream('reviews.csv'));
  var counter = 0;

  for (var i = 0; i < seed; i++) {

    var stars = StartRating()

    writer.write({
      // id: counter+=1,
      id_restaurants: randomInt(10000000),
      id_user: randomInt(500000),
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
      loved_for: lovedForArr[randomInt(6)],
      filters: filterArr[randomInt(6)]
    })
  }
  writer.end();
  return "done"
};



// dataGenUsers(500);

// dataGenReviews(500);

// dataGenRestaurant(500);

Promise.resolve()
  // .then( dataGenRestaurant(500))
  .then(dataGenReviews(500))
        // .then( dataGenUsers(500))