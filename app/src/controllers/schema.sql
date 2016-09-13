
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
ALTER TABLE "writer_key"
  OWNER TO writer_key;
