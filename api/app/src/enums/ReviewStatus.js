module.exports = function ReviewStatus(Enum) {
  return new Enum('ReviewStatus',
    {key: 'notStarted', display: 'Not Started'},
    {key: 'inProgress', display: 'In Progress'},
    {key: 'submitted', display: 'Submitted'},
    {key: 'viewed', display: 'Viewed'});
};
