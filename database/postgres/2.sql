\connect reviews_c_top;

ALTER TABLE review_list DISABLE TRIGGER ALL;

COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/home/ubuntu/reviews1.csv' CSV HEADER;

\COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/home/ubuntu/reviews2.csv' CSV HEADER;

\COPY review_list (id_restaurants, id_user, date_review, review_message, rating_overall, rating_recent, rating_food,  rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) FROM '/home/ubuntu/reviews3.csv' CSV HEADER;






