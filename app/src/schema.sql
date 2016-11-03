
CREATE SCHEMA IF NOT EXISTS writer_key;

-- DROP SCHEMA public;

GRANT ALL ON SCHEMA public TO writer_key;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
  IS 'standard public schema';

-- Table: "hello"

DROP TABLE IF EXISTS "writer_key";

CREATE TABLE "writer_key"
(
  id uuid NOT NULL,
  "Hello" text
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "writer_key.writer_key"
  OWNER TO writer_key;

-- Table: "activity"

DROP TABLE IF EXISTS "activity";

CREATE TABLE "activity"
(
  id uuid NOT NULL,
  document jsonb
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "writer_key.activity"
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
ALTER TABLE "writer_key.draft"
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
ALTER TABLE "writer_key.user"
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
ALTER TABLE "writer_key.course"
  OWNER TO writer_key;
