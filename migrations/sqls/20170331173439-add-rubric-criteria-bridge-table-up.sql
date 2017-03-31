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