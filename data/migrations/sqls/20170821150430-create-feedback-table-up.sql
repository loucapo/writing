DROP TABLE IF EXISTS "feedback" CASCADE;

CREATE TABLE "feedback"
(
  feedback_id uuid NOT NULL,
  student_draft_id uuid NOT NULL,
  content text NOT NULL,
  created_by_id text,
  created_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "feedback"
  OWNER TO writer_key;
ALTER TABLE "feedback"
  ADD PRIMARY KEY (feedback_id);
