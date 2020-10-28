-- psql postgres <schema.post.sql

DROP DATABASE IF EXISTS reviews_c_top;

CREATE DATABASE reviews_c_top;

\connect reviews_c_top;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name_of_restaurant varchar(50),
  number_of_reviews int,
  rating_overall decimal(2, 1),
  rating_recent decimal(2, 1),
  rating_food decimal(2, 1),
  rating_service decimal(2, 1),
  rating_ambience decimal(2, 1),
  noise_level varchar(20),
  would_recommend decimal(3, 2),
  percent_five_star decimal(3, 2),
  percent_four_star decimal(3, 2),
  percent_three_star decimal(3, 2),
  percent_two_star decimal(3, 2),
  percent_one_star decimal(3, 2),
  loved_for varchar(100),
  filters varchar(100)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  avatar varchar(100),
  first_name varchar(20),
  last_name varchar(20),
  number_of_reviews smallint,
  locale varchar(50)
);

CREATE TABLE review_list (
  id SERIAL PRIMARY KEY,
  id_restaurants int REFERENCES restaurants(id) ON DELETE CASCADE,
  id_user int REFERENCES users(id) ON DELETE CASCADE,
  date_review  DATE NOT NULL,
  review_message varchar(1000),
  rating_overall int,
  rating_recent int,
  rating_food int,
  rating_service int,
  rating_ambience int,
  noise_level varchar(20),
  would_recommend int,
  loved_for varchar(150),
  filters varchar
);


\COPY restaurants ( name_of_restaurant, number_of_reviews, rating_overall, rating_recent, rating_food ,rating_service , rating_ambience , noise_level, would_recommend , percent_five_star , percent_four_star , percent_three_star , percent_two_star , percent_one_star ,loved_for, filters) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/postgres/restaurnt.csv' CSV HEADER;

\COPY users ( avatar , first_name,  last_name, number_of_reviews ,locale) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/postgres/users.csv' CSV HEADER;

\COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/postgres/reviews7.csv' CSV HEADER;

-- \COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/postgres/reviews2.csv' CSV HEADER;

-- \COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/postgres/reviews3.csv' CSV HEADER;

-- \COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/postgres/reviews4.csv' CSV HEADER;


