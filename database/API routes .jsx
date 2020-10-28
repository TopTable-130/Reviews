
get(`/api/restaurants/${x}`)

  {
    "id":2,
  "name_of_restaurant":"string",
  "number_of_reviews":"Number",
  "rating_overall":"Number",
  "rating_recent":"Number",
  "rating_food":"Number",
  "rating_service":"Number",
  "rating_ambience":"Number",
  "noise_level":"String",
  "would_recommend":"Number",
  "percent_five_star":"Number",
  "percent_four_star":"Number",
  "percent_three_star":"Number"
  "percent_two_star":"Number",
  "percent_one_star":"Number",
  "loved_for":"String",
  "filters":"String"
  }

  get(`/api/review_list/:id`)

  [
    {
      "id": "Number",
      "id_restaurants": "Number",,
      "avatar": "Image URL",
      "first_name": "Emmet",
      "last_name": "Streich",
      "number_of_reviews": "Number",,
      "locale": "Ondrickaborough",
      "create_date_month": "String Month ",
      "create_date_day": "String Date DD",,
      "create_date_year": "String Year YYYY",
      "review_message": "String",
      "rating_overall": "Number",,
      "rating_recent": "Number",,
      "rating_food": "Number",,
      "rating_service": "Number",,
      "rating_ambience": "Number",,
      "noise_level": "String",
      "would_recommend": "Number",,
      "loved_for": "String",
      "filters": "String"
  },
  .
  .
  .
]


```
```
get ('/api/users')
[
  {
      "id": 1,
      "avatar": "https://mataeux.s3-us-west-1.amazonaws.com/avatars/0.jpg",
      "first_name": "Hailee",
      "last_name": "Stamm",
      "number_of_reviews": 112,
      "locale": "North Gennaro"
  },
  obj2,
  obj3,
  .
  .
  .
]