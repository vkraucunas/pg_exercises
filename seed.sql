DROP TABLE IF EXISTS cities_data;

CREATE TABLE cities_data (
    id serial PRIMARY KEY,
    name text,
    country text,
    rating integer DEFAULT 5
);


INSERT INTO cities_data (name, country, rating) VALUES
    ('Denver', 'USA', 10),
    ('Tekamah', 'USA', 2),
    ('Philadelphia', 'USA', 7),
    ('Stockholm', 'Sweden', 7),
    ('Beijing', 'China', 2),
    ('Moscow', 'Russia', 2),
    ('Berlin', 'Germany', 6),
    ('Paris', 'France', 5),
    ('Brussels', 'Belgium', default);