# Project Name
Topable 


## Related Legacy Projects (Front End)
> TKOut

  - Popular Dishes Service - Anna - https://github.com/TKOut-HRSF130/popular-dishes-service
  - Photos Carousel Service - Billy - https://github.com/TKOut-HRSF130/photos-carousel-service
  - Bookings Service - Johnny - https://github.com/TKOut-HRSF130/bookings-service
  - Reviews Service - Mataeux - https://github.com/TKOut-HRSF130/reviews-service



## Server API

### Get restaurant info
  * GET `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "cost": "Number"
    }
```

### Add restaurant
  * POST `/api/restaurants`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "googleMap": "String location",
      "cost": "Number"
    }
```


### Update restaurant info
  * PATCH `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "cost": "Number"
    }
```

### Delete restaurant
  * DELETE `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

### Add image to restaurant
  * POST `/api/restaurants/:restaurantId/images`

**Path Parameters:**

  * `restaurantId` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "user": "String",
      "image": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "restaurant": "id Number",
      "cost": "Number"
    }
```







## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
