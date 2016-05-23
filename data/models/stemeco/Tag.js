module.exports = function(sequelize, Sequelize) {
  return sequelize.define('tags', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    business_unit_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
