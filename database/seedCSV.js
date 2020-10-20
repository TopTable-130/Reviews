const fs = require('fs');
const csvWriter = require('csv-write-stream');
var faker = require('faker');
var writer = csvWriter();


// create array of first names 500 long
var firstNames = []
var lastNames = []
var firstNames = ()=> {


  for (var i = 0; i < 500; i++) {
    firstNames.push(faker.name.firstName())
    lastNames.push(faker.name.lastName())
  }
console.log(firstNames)
}






var counter = 0;

const dataGen = ()=> {
  console.time("db")
  writer.pipe(fs.createWriteStream('data.csv'));
  for (var i = 0; i < 1000000; i++) {
    if (counter %1000 === 0){
      console.log(counter)
    }
    writer.write({
      id: counter++,
      price: faker.commerce.price(),
      name: faker.name.findName(),
      last: faker.internet.email(),
      cc : faker.helpers.createCard(),
    })
  }
  writer.end();
  console.log("done")
  console.timeEnd("db")
};

dataGen();