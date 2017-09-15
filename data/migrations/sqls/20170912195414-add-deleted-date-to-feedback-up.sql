ALTER TABLE feedback ADD COLUMN deleted_by_id uuid;
ALTER TABLE feedback ADD COLUMN deleted_date date;

CREATE INDEX feedback_deleted_date_idx ON feedback (feedback_id)
  WHERE deleted_date is NULL;