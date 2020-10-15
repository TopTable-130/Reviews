# Project Name
Topable 


## Related Legacy Projects (Front End)
> TKOut

  - Popular Dishes Service - Anna - https://github.com/TKOut-HRSF130/popular-dishes-service
  - Photos Carousel Service - Billy - https://github.com/TKOut-HRSF130/photos-carousel-service
  - Bookings Service - Johnny - https://github.com/TKOut-HRSF130/bookings-service
  - Reviews Service - Mataeux - https://github.com/TKOut-HRSF130/reviews-service



## Server API

### Get restaurant all resturant reviews
  * GET `/resturant/:id/reviews`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
  [
    {
      "id": "Number",
      "id_restaurants": "Number",
      "avatar": "Image URL",
      "first_name": "Emmet",
      "last_name": "Streich",
      "number_of_reviews": "Number",
      "locale": "Ondrickaborough",
      "create_date_month": "String Month ",
      "create_date_day": "String Date DD",
      "create_date_year": "String Year YYYY",
      "review_message": "String",
      "rating_overall": "Number",
      "rating_recent": "Number",
      "rating_food": "Number",
      "rating_service": "Number",
      "rating_ambience": "Number",
      "noise_level": "String",
      "would_recommend": "Number",
      "loved_for": "String",
      "filters": "String"
  },
]
```

### Add restaurant reviews
  * POST `/resutrant/:id/reviews/:user`
**Path Parameters:**
  * `:id` restaurant id, `:user` user id
**Success Status Code:** `200`

**Request Body**: Expects JSON with the following keys.

```json
    
  {
    
     "id_restaurants": "Number",
      "avatar": "Image URL",
      "first_name": "Emmet",
      "last_name": "Streich",
      "number_of_reviews": "Number",
      "locale": "String",
      "create_date_month": "String Month ",
      "create_date_day": "String Date DD",
      "create_date_year": "String Year YYYY",
      "review_message": "String",
      "rating_overall": "Number",
      "rating_recent": "Number",
      "rating_food": "Number",
      "rating_service": "Number",
      "rating_ambience": "Number",
      "noise_level": "String",
      "would_recommend": "Number",
      "loved_for": "String",
      "filters": "String"
  }
    
```


### Update restaurant Review
  * PATCH `/resutrant/:id/reivews/:reviewId`

**Path Parameters:**
  * `id` restaurant id, `:reviewId` review Id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
       "review_message": "String",
      "rating_overall": "Number",
      "rating_recent": "Number",
      "rating_food": "Number",
      "rating_service": "Number",
      "rating_ambience": "Number",
      "noise_level": "String",
      "would_recommend": "Number",
      "loved_for": "String",
    }
```

### Delete restaurant review
  * DELETE '/resturant/:id/reviews/:reviewId'`

**Path Parameters:**
 * `id` restaurant id, `:reviewId` review Id

**Success Status Code:** `204`
+



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
