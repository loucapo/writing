module.exports = function(sequelize, Sequelize) {
  return sequelize.define('access_codes', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    access_code: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    date_used: {
      type: Sequelize.DATE,
      allowNull: true
    },
    business_unit: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    course_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    multi_use: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    cost: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    tag_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    parent_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    batch_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    bt_trans_id: {
      type: Sequelize.STRING(45),
      allowNull: true
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
