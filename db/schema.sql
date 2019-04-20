DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int
        NOT NULL
    AUTO_INCREMENT 
PRIMARY KEY,
    burger_name
    VARCHAR
    (40) NOT NULL,
    devoured boolean not null default 0
);

    SELECT *
    FROM burgers;