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