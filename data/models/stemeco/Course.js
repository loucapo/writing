module.exports = function(sequelize, Sequelize) {
  return sequelize.define('courses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    business_unit: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    course_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    course_cost: {
      type: Sequelize.DOUBLE(),
      allowNull: false
    },
    accept_access_code: {
      type: Sequelize.BOOLEAN(),
      allowNull: true
    },
    accept_braintree: {
      type: Sequelize.BOOLEAN(),
      allowNull: true
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
