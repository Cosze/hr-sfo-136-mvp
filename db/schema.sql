DROP DATABASE IF EXISTS cleanroom;
CREATE DATABASE cleanroom;

\c cleanroom;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  role VARCHAR(10) NOT NULL
);

CREATE TABLE requests(
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(50) NOT NULL,
  room SMALLINT NOT NULL,
  server_name VARCHAR(50),
  schedule BIGINT NOT NULL,
  time_accepted BIGINT,
  time_started BIGINT,
  time_completed BIGINT,
  preferences VARCHAR(500),
  tip SMALLINT DEFAULT 0,
  status VARCHAR(20) DEFAULT 'open'
);
