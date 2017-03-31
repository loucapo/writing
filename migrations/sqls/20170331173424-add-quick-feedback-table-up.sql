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