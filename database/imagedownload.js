const download = require('image-downloader')


for (var i = 1; i < 100; i++) {

  const options = {
    url: `https://mataeux.s3-us-west-1.amazonaws.com/avatars/${i}.jpg`,
    dest: '/Users/ryandecoster/Desktop/SDC/reviews-service/images'                // will be saved to /path/to/dest/image.jpg
  }

  download.image(options)
    .then(({ filename }) => {
      console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
    })
    .catch((err) => console.error(err))

}