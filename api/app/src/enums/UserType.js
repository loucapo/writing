module.exports = function(enumify) {
  return function() {
    class UserType extends enumify.Enum {}
    UserType.initEnum(['INSTRUCTOR', 'STUDENT']);
    return UserType;
  }();
};
