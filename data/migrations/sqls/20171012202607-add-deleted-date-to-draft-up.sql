/* Replace with your SQL commands */
ALTER TABLE draft ADD COLUMN deleted_by_id uuid;
ALTER TABLE draft ADD COLUMN deleted_date date;

CREATE INDEX draft_deleted_date_idx ON draft (draft_id)
  WHERE deleted_date is NULL;