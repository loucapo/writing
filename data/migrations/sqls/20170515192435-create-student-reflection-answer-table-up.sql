-- Table: "student_reflection_answer"

DROP TABLE IF EXISTS "student_reflection_answer" CASCADE;

CREATE TABLE "student_reflection_answer"
(
  student_reflection_answer_id uuid NOT NULL,
  student_draft_id uuid NOT NULL,
  student_reflection_question_id uuid NOT NULL,
  student_reflection_answer text,
  created_by_id text NOT NULL,
  created_date date NOT NULL,
  modified_by_id text,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "student_reflection_answer"
  OWNER TO writer_key;
ALTER TABLE "student_reflection_answer"
    ADD PRIMARY KEY (student_reflection_answer_id);
