CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: criteria

ALTER TABLE "writer_key"."criteria" 
  DROP COLUMN "goal_option_1",
  DROP COLUMN "goal_option_2",
  DROP COLUMN "goal_option_3";

-- Table: goal

DROP TABLE IF EXISTS goal CASCADE;

CREATE TABLE goal
(
  goal_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text,
  description text,
  option_1 text,
  option_2 text,
  option_3 text,
  created_by_id uuid,
  created_date date,
  modified_by_id uuid,
  modified_date date,
  deleted_by_id uuid,
  deleted_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE goal
  OWNER TO writer_key;

-- Table: editing_mark

DROP TABLE IF EXISTS editing_mark CASCADE;

CREATE TABLE editing_mark
(
  editing_mark_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text,
  description text,
  created_by_id uuid,
  created_date date,
  modified_by_id uuid,
  modified_date date,
  deleted_by_id uuid,
  deleted_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE editing_mark
  OWNER TO writer_key;
  
-- Table: draft2goal

DROP TABLE IF EXISTS draft2goal CASCADE;

CREATE TABLE draft2goal
(
  draft_id uuid NOT NULL REFERENCES draft,
  goal_id uuid NOT NULL REFERENCES goal
)
WITH (
  OIDS=FALSE
);
ALTER TABLE draft2goal
  OWNER TO writer_key;

-- Table: related_content

DROP TABLE IF EXISTS related_content CASCADE;

CREATE TABLE related_content
(
  related_content_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text,
  link text,
  created_by_id uuid,
  created_date date,
  modified_by_id uuid,
  modified_date date,
  deleted_by_id uuid,
  deleted_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE related_content
  OWNER TO writer_key;

-- Table: goal2related_content

DROP TABLE IF EXISTS goal2related_content CASCADE;

CREATE TABLE goal2related_content
(
  goal_id uuid NOT NULL REFERENCES goal,
  related_content_id uuid NOT NULL REFERENCES related_content,
  index integer
)
WITH (
  OIDS=FALSE
);
ALTER TABLE goal2related_content
  OWNER TO writer_key;
  
-- Table: editing_mark2related_content

DROP TABLE IF EXISTS editing_mark2related_content CASCADE;

CREATE TABLE editing_mark2related_content
(
  editing_mark_id uuid NOT NULL REFERENCES editing_mark,
  related_content_id uuid NOT NULL REFERENCES related_content,
  index integer
)
WITH (
  OIDS=FALSE
);
ALTER TABLE editing_mark2related_content
  OWNER TO writer_key;
  
-- Table: feedback
ALTER TABLE feedback ADD COLUMN goal_id uuid REFERENCES goal;
ALTER TABLE feedback ADD COLUMN editing_mark_id uuid REFERENCES editing_mark;
