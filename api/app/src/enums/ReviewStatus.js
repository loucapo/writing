module.exports = function ReviewStatus(Enum) {
  return new Enum('ReviewStatus',
    {key: 'inProgress', display: 'In Progress'},
    {key: 'submitted', display: 'Submitted'},
    {key: 'notStarted', display: 'Not Started'});
};
