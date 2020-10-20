CREATE KEYSPACE restaurant_reviews
With replication ={'class': 'SImpleStratetgy', 'replication_factor' : 1};

CREATE TABLE restaurants (
  id int,
  name_of_restaurant varchar,
  number_of_reviews tinyint,
  rating_overall decimal,
  rating_recent decimal,
  rating_food decimal,
  rating_service decimal,
  rating_ambience decimal,
  noise_level varchar,
  would_recommend BOOLEAN,
  decimarcent_five_star decimal,
  percent_four_star decimal,
  percent_three_star decimal,
  percent_two_star decimal,
  percent_one_star decimal,
  loved_for varchar,
  filters varchar,
  PRIMARY KEY ((id), name_of_restaurant))
  WITH CLUSTERING ORDER BY (name_of_restaurant ASC);

CREATE TABLE users (
  id int,
  avatar varchar,
  first_name varchar,
  last_name varchar,
  number_of_reviews smallint,
  locale varchar,
  PRIMARY KEY ((id), locale));

CREATE TABLE review_resturant(
  id int,
  id_restaurants int,
  avatar varchar,
  first_name varchar,
  last_name varchar,
  date_review  TIMESTAMP,
  review_message varchar,
  rating_overall tinyint,
  rating_recent tinyint,
  rating_food tinyint,
  rating_service tinyint,
  rating_ambience tinyint,
  noise_level varchar,
  would_recommend tinyint,
  loved_for varchar,
  filters varchar,
PRIMARY KEY((id_restaurants, id ), date_review, rating_overall))
WITH CLUSTERING ORDER BY (date_review ASC, rating_overall ASC );

CREATE TABLE review_user (
  id int,
  id_user int,
  id_restaurants tinyint,
  avatar varchar,
  first_name varchar,
  last_name varchar,
  date_review  TIMESTAMP,
  review_message varchar,
  rating_overall tinyint,
  rating_recent tinyint,
  rating_food tinyint,
  rating_service tinyint,
  rating_ambience tinyint,
  noise_level varchar,
  would_recommend tinyint,
  loved_for varchar,
  filters varchar,
PRIMARY KEY((id_user, id ), date_review, rating_overall))
 WITH CLUSTERING ORDER BY (date_review ASC, rating_overall ASC );