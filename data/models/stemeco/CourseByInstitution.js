module.exports = function(sequelize, Sequelize) {
  return sequelize.define('courses_by_institution', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    institution_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    eco_course_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
