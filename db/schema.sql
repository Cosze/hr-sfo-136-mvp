DROP DATABASE IF EXISTS mvp;
CREATE DATABASE mvp;

\c mvp;

-- CREATE TABLE clients(
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(30) NOT NULL,
--   room SMALLINT NOT NULL
-- );

-- CREATE TABLE servers(
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(30) NOT NULL
-- );

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
  tip SMALLINT
);

-- ALTER TABLE requests ADD FOREIGN KEY (client_id) REFERENCES clients(id);
-- ALTER TABLE requests ADD FOREIGN KEY (server_id) REFERENCES servers(id);