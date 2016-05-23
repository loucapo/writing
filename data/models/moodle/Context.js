module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_context', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    contextlevel: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    instanceid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    path: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    depth: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    freezeTableName: true
  });
};
