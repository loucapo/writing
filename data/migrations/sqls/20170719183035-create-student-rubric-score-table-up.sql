DROP TABLE IF EXISTS "student_rubric_score" CASCADE;

CREATE TABLE "student_rubric_score"
(
  student_rubric_score_id uuid NOT NULL,
  student_draft_id uuid NOT NULL,
  rubric_id uuid NOT NULL,
  criteria_id uuid NOT NULL,
  score text NOT NULL,
  modified_by_id text,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "student_rubric_score"
  OWNER TO writer_key;
ALTER TABLE "student_rubric_score"
    ADD PRIMARY KEY (student_rubric_score_id);
