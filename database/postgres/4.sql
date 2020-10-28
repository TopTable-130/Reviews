\connect reviews_c_top;

\COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/home/ubuntu/reviews7.csv' CSV HEADER;

\COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/home/ubuntu/reviews8.csv' CSV HEADER;

\COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/home/ubuntu/reviews9.csv' DELIMITER ',' CSV HEADER;
