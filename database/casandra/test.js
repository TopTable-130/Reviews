

const faker = require('faker');
const fs = require('fs');

const restaurantCount = 1000;
const filename = 'test.csv';
const stream = fs.createWriteStream(filename);
const stream1= fs.createWriteStream('anothertest.csv');



const packageRestaurant = (i) => {

    const openingTime = faker.random.number({
      min: 9,
      max: 13,
    });

    const closingTime = faker.random.number({
      min: 20,
      max: 23,
    });
  return `${openingTime},${closingTime}\n`;
};

(async() => {
  for (let i = 0; i <= restaurantCount; i += 1) {
      const Restaurant = packageRestaurant(i);
      if (!stream.write(Restaurant)) {
        await new Promise(resolve => stream.once('drain', resolve));

    }
    console.log( `data generated  ${i} records`)

  }
})();

(async() => {
  for (let i = 0; i <= restaurantCount; i += 1) {
      const Restaurant = packageRestaurant(i);
      if (!stream1.write(Restaurant)) {
        await new Promise(resolve => stream1.once('drain', resolve));

    }
    console.log( `data generated  ${i} records`)

  }
})();
