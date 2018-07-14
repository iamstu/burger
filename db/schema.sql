CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name VARCHAR(45) null,
    devoured BOOLEAN not null,
    PRIMARY KEY (id)
);