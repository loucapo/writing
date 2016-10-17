module.exports = function (enumify) {
  return function () {
    class UserType extends enumify {}
    UserType.initEnum(['INSTRUCTOR', 'STUDENT']);

    return UserTYpe;
  }
};