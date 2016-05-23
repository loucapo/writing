module.exports = function(sequelize, Sequelize) {
  return sequelize.define('institutions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
