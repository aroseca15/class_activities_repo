DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  
  id INT NOT NULL, Auto_Increment,
  
  title VARCHAR(40) BOOLEAN NOT NULL,
  
  artist VARCHAR(40), NOT NULL,
  
  genre INT VARCHAR(40), NULL,
);

INSERT INTO songs(title, artist, genre)
VALUES ('I Feel The Earth Move', 'Carol King', 'Piano');

INSERT INTO songs(title, artist, genre)
VALUES ('You Really Got Me', 'The Kinks', 'Oldies');

INSERT INTO songs(title, artist, genre)
VALUES ('Think(About It)', 'Lyn Collins', 'Classic R&B');


