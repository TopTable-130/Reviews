-- cqlsh <schema.cassandra.cql
DROP KEYSPACE IF EXISTS tableTop;
CREATE KEYSPACE IF NOT EXISTS tableTop With replication ={'class': 'SimpleStrategy', 'replication_factor' : 1};

use tableTop;

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


 COPY users ( id, avatar, first_name, last_name, number_of_reviews, locale) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/users.csv' WITH HEADER = TRUE and delimiter =',';

COPY restaurants ( id, name_of_restaurant, number_of_reviews, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, decimarcent_five_star, percent_four_star, percent_three_star, percent_two_star, percent_one_star, loved_for, filters) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/restaurnt.csv' WITH HEADER = TRUE and delimiter =',';

COPY review_resturant (
  id, id_restaurants, avatar, first_name, last_name, date_review, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters
) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/reviewbyRest1.csv' WITH HEADER = TRUE and delimiter =',';

COPY review_resturant (
  id, id_restaurants, avatar, first_name, last_name, date_review, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters
) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/reviewbyRest2.csv' WITH HEADER = TRUE and delimiter =',';

COPY review_resturant (
  id, id_restaurants, avatar, first_name, last_name, date_review, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters
) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/reviewbyRest3.csv' WITH HEADER = TRUE and delimiter =',';


COPY review_user (
  id, id_user, avatar, first_name, last_name, date_review, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters
) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/reviewbyuser1.csv' WITH HEADER = TRUE and delimiter =',';

COPY review_user (
  id, id_user, avatar, first_name, last_name, date_review, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters
) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/reviewbyuser2.csv' WITH HEADER = TRUE and delimiter =',';

COPY review_user (
  id, id_user, avatar, first_name, last_name, date_review, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters
) FROM '/Users/ryandecoster/Desktop/SDC/reviews-service/database/casandra/reviewbyuser3.csv' WITH HEADER = TRUE and delimiter =',';

