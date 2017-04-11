/* Replace with your SQL commands */
CREATE SCHEMA IF NOT EXISTS writer_key;

-- DROP SCHEMA public;

GRANT ALL ON SCHEMA public TO writer_key;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
  IS 'standard public schema';

SET search_path TO writer_key,public;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Table: "activity"

DROP TABLE IF EXISTS "activity";

CREATE TABLE "activity"
(
  id uuid NOT NULL,
  course_id text NOT NULL,
  title text,
  prompt jsonb,
  rubric_id uuid,
  created_by_id text NOT NULL,
  created_date date NOT NULL,
  modified_by_id text,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "activity"
  OWNER TO writer_key;
ALTER TABLE "activity"
    ADD PRIMARY KEY (id);

-- Table: "criteria"

DROP TABLE IF EXISTS "criteria";

CREATE TABLE "criteria"
(
  id uuid NOT NULL,
  title varchar(255),
  description varchar(500),
  available_to_rubric boolean,
  rubric_level_1 varchar(255),
  rubric_level_2 varchar(255),
  rubric_level_3 varchar(255),
  rubric_level_4 varchar(255),
  goal_option_1 varchar(500),
  goal_option_2 varchar(500),
  goal_option_3 varchar(500),
  created_by_id uuid,
  created_date date,
  modified_by_id uuid,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "criteria"
  OWNER TO writer_key;

-- Table: "quick_feedback"

DROP TABLE IF EXISTS "quick_feedback";

  CREATE TABLE "quick_feedback"
  (
    id uuid NOT NULL,
    title varchar(255),
    description varchar(500),
    created_by_id uuid,
    created_date date,
    modified_by_id uuid,
    modified_date date
  )
  WITH (
    OIDS=FALSE
  );
  ALTER TABLE "quick_feedback"
    OWNER TO writer_key;

-- Table: "rubric"

DROP TABLE IF EXISTS "rubric";

CREATE TABLE "rubric"
(
  id uuid NOT NULL,
  title varchar(255),
  description varchar(500),
  created_by_id uuid,
  created_date date,
  modified_by_id uuid,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "rubric"
  OWNER TO writer_key;

-- Table: "rubric_criteria"

DROP TABLE IF EXISTS "rubric_criteria";

CREATE TABLE "rubric_criteria"
(
  rubric_id uuid NOT NULL,
  criteria_id uuid NOT NULL,
  index int
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "rubric_criteria"
  OWNER TO writer_key;

-- Table: "student_reflection_questions"

DROP TABLE IF EXISTS "student_reflection_questions";

CREATE TABLE "student_reflection_questions"
(
  id uuid NOT NULL,
  question varchar(500),
  question_type varchar(25),
  created_by_id uuid,
  created_date date,
  modified_by_id uuid,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "student_reflection_questions"
  OWNER TO writer_key;


-- Table: "draft"

DROP TABLE IF EXISTS draft;

CREATE TABLE draft
(
  id uuid NOT NULL PRIMARY KEY,
  activity_id uuid NOT NULL REFERENCES activity (id),
  instructions text,
  index int NOT NULL,
  created_by_id uuid,
    created_date date,
    modified_by_id uuid,
    modified_date date,
  UNIQUE (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE draft
  OWNER TO writer_key;

-- Table: "draft_criteria"

DROP TABLE IF EXISTS "draft_criteria";

CREATE TABLE "draft_criteria"
(
  draft_id uuid NOT NULL,
  criteria_id uuid NOT NULL
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "draft_criteria"
  OWNER TO writer_key;
