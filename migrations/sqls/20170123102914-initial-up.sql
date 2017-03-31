/* Replace with your SQL commands */
CREATE SCHEMA IF NOT EXISTS writer_key;

-- DROP SCHEMA public;

GRANT ALL ON SCHEMA public TO writer_key;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
  IS 'standard public schema';

SET search_path TO writer_key,public;

-- Table: "writer_key"

DROP TABLE IF EXISTS "writer_key";

CREATE TABLE "writer_key"
(
  id uuid NOT NULL,
  "Hello" text
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "writer_key"
  OWNER TO writer_key;

-- Table: "activity"

DROP TABLE IF EXISTS "activity";

CREATE TABLE "activity"
(
  id text NOT NULL,
  courseId text NOT NULL,
  title text,
  createdById text NOT NULL,
  createdDate date NOT NULL
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "activity"
  OWNER TO writer_key;


-- Table: "draft"

DROP TABLE IF EXISTS "draft";

CREATE TABLE "draft"
(
  id uuid NOT NULL,
  document jsonb
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "draft"
  OWNER TO writer_key;

-- Table: "user"

DROP TABLE IF EXISTS "user";

CREATE TABLE "user"
(
  id uuid NOT NULL,
  firstName varchar(255),
  lastName varchar(255),
  email varchar(255),
  IAM uuid NOT NULL,
  userType varchar(255)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "user"
  OWNER TO writer_key;

-- Table: "course"

DROP TABLE IF EXISTS "course";

CREATE TABLE "course"
(
  id uuid NOT NULL,
  title varchar(255),
  abbreviation varchar(255),
  courseId varchar(255),
  instructorId uuid NOT NULL
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "course"
  OWNER TO writer_key;

CREATE EXTENSION pgcrypto;