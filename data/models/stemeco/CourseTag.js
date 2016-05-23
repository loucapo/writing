module.exports = function(sequelize, Sequelize) {
  return sequelize.define('course_tags', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    tag_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    primary: {
      type: Sequelize.BOOLEAN(),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
