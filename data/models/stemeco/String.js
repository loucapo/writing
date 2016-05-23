module.exports = function(sequelize, Sequelize) {
  return sequelize.define('strings', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: Sequelize.STRING(32),
      allowNull: false
    },
    group_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    string: {
      type: Sequelize.TEXT(),
      allowNull: false
    },
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
