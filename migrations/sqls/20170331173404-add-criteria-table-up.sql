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
  draft_goals_1 varchar(500),
  draft_goals_2 varchar(500),
  draft_goals_3 varchar(500),
  draft_goals_4 varchar(500),
  draft_goals_5 varchar(500),
  draft_goals_6 varchar(500),
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