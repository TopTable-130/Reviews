
# TopTable Reviews Service

TopTable provides a scalable backend architecture for a production-ready Microservices, designed to host reviews for up to 10 million restaurants.

[![version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/TKOut-HRSF130/reviews-service/releases/tag/1.0.0)
[![license](https://img.shields.io/badge/license-ISC-brightgreen)](./LICENSE)

## Table of Contents

- [Related Legacy Projects (Front End)](#related-legacy-projects-front-end)
- [Server API](#server-api)
  - [Get all restaurant reviews](#get-all-restaurant-reviews)
  - [Add restaurant reviews](#add-restaurant-reviews)
  - [Update restaurant review](#update-restaurant-review)
  - [Delete restaurant review](#delete-restaurant-review)
- [Usage](#usage)
- [Requirements](#requirements)
- [Development](#development)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## Related Projects (Front End)

- [Popular Dishes Service ](https://github.com/TKOut-HRSF130/popular-dishes-service)
- [Photos Carousel Service ](https://github.com/TKOut-HRSF130/photos-carousel-service)
- [Bookings Service ](https://github.com/TKOut-HRSF130/bookings-service)
- [Reviews Service ](https://github.com/TKOut-HRSF130/reviews-service)

## Server API

### Get all restaurant reviews

- **Method:** `GET`
- **Path:** `/restaurant/:id/reviews`
- **Path Parameters:** `id` - restaurant id
- **Success Status Code:** `200`
- **Response:** JSON, array of review objects as described below.

### Add restaurant reviews

- **Method:** `POST`
- **Path:** `/restaurant/:id/reviews/:user`
- **Path Parameters:** `id` - restaurant id, `user` - user id
- **Success Status Code:** `200`
- **Request Body:** JSON, review object structure as described below.

### Update restaurant review

- **Method:** `PATCH`
- **Path:** `/restaurant/:id/reviews/:reviewId`
- **Path Parameters:** `id` - restaurant id, `reviewId` - review id
- **Success Status Code:** `204`
- **Request Body:** JSON, keys to be updated from review object.

### Delete restaurant review

- **Method:** `DELETE`
- **Path:** `/restaurant/:id/reviews/:reviewId`
- **Path Parameters:** `id` - restaurant id, `reviewId` - review id
- **Success Status Code:** `204`

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- and more...

## Development

### Installing Dependencies

From within the root directory:
```sh
npm install -g webpack
npm install
```

## Scripts

- Start Webpack in development mode: `npm run react-dev`
- Start the server with nodemon: `npm start`
- Start the server once: `npm run start-once`
- Seed the database: `npm run seed`
- Run Jest tests: `npm test`
- Run k6 tests: `npm run load-test`
- Run Jest tests with coverage: `npm run test:coverage`

## Dependencies

- Main: `axios`, `body-parser`, `express`, `react`, `styled-components` and others.
- Dev: `@babel/core`, `jest`, `webpack` and others.

For a full list of dependencies, please refer to the `package.json`.

## Contributing

Please fork the repository, create a feature branch, and submit a Pull Request. Ensure that tests pass and that your changes meet the project's coding standards before submitting.

[GitHub Repository](https://github.com/TKOut-HRSF130/reviews-service)
```

This README is structured to be comprehensive and informative. Adjust as needed for your project's requirements.
