/* Replace with your SQL commands */

-- Make Activity id of the uuid type

ALTER TABLE activity
    ALTER COLUMN id TYPE uuid USING "id"::UUID;

-- Add Primary Key to activity table

ALTER TABLE activity
    ADD PRIMARY KEY (id);

-- Table: "draft_description"

DROP TABLE IF EXISTS draft_description;

CREATE TABLE draft_description
(
  id uuid NOT NULL PRIMARY KEY,
  activity_id uuid NOT NULL REFERENCES activity (id),
  instructions text,
  list_position int NOT NULL,
  created_date TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
  updated_date TIMESTAMP,
  UNIQUE (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE draft_description
  OWNER TO writer_key;
